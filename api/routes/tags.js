const express = require('express');
const router = express.Router();
const path = require('path');
const mysql_connection = require('../../mysql_connection');
var moment = require('moment');

router.get('/deleteByID/:tag_ID', (req, res,next) => {
    let id = req.params.tag_ID;

    let sql = 'DELETE FROM tags WHERE id = ?';
    
    mysql_connection.query(sql,[id], (err,result) => {
        if(err) throw err;
        console.log(result);
        //res.send('bookmark with id ' + id + ' deleted');
    });


    res.status(200).json({
        meesage: 'tag with id ' + id + ' deleted'
    });
});


router.get('/deleteByTitle/:tag_title', (req, res,next) => {
    let tag_title = req.params.tag_title;
    let sql = 'DELETE FROM tags WHERE title = ?';
    
    mysql_connection.query(sql,[tag_title], (err,result) => {
        if(err) throw err;
        console.log(result);
        //res.send('bookmark with id ' + id + ' deleted');
    });


    res.status(200).json({
        meesage: 'tag with title ' + tag_title + ' deleted'
    });
});

router.get('/retrieve', (req, res,next) => {

    let sql = 'SELECT * from tags';
    
    mysql_connection.query(sql, (err,result) => {
        if(err) throw err;
        console.log( result);
        if(result.length > 0) {
            res.status(200).json(JSON.parse(JSON.stringify(result)));
        }
        else{
            res.status(200).json({
                message: "No record found"
            });
        }
    });

    //res.sendFile(path.join(__dirname, '../../', 'views' , 'show_bookmarks.html'));
    


});


router.post('/create', (req, res,next) => {
   
    var title = req.body.title;
    var datetime = moment().format('YYYY-MM-DD hh:mm:ss');

    let sql = 'SELECT * FROM tags WHERE title = ?';

    mysql_connection.query(sql,[title], (err,result) => {
        if(err) throw err;
        if(result.length == 0){
            let sql = 'INSERT INTO tags(title,time_created) VALUES(?,?)';

            mysql_connection.query(sql,[title,datetime], (err,result) => {
                if(err) throw err;
                console.log(result);
                res.send('tag created');
            });
        }
        else{
            res.send('Tag with similar title exists!');
        }
    });

    
});





router.post('/add-to-bookmark', (req, res,next) => {
    var title = req.body.title;
    var id = req.body.id;
    var datetime = moment().format('YYYY-MM-DD hh:mm:ss');
    
    if(title && title != "" && title != null){
        let sql = 'SELECT id,tags FROM bookmarks WHERE title = ?';

        mysql_connection.query(sql,[title], (err,result) => {
            if(err) throw err;
            console.log(result);
            if(result.length > 0){
                let new_id = result[0].id;
                var tags = result[0].tags;
                var tags = tags + "," + req.body.tags;
                let sql = 'UPDATE bookmarks  set tags = ? ,time_updated = ? where id = ?';
    
                mysql_connection.query(sql,[tags,datetime,new_id], (err,result) => {
                    if(err) throw err;
                    console.log(result);
                    res.send('tag updated');
                });
            }
            else{
                res.send('No tag found');
            }
        });
    } 
    else if(id && id != "" && id != null){
        let sql = 'SELECT id,tags FROM bookmarks WHERE id = ?';

        mysql_connection.query(sql,[id], (err,result) => {
            if(err) throw err;
            
            
            if(result.length > 0){
                var tags = result[0].tags;
                var tags = tags + "," + req.body.tags;
                let sql = 'UPDATE bookmarks  set tags = ? ,time_updated = ? where id = ?';
    
                mysql_connection.query(sql,[tags,datetime,id], (err,result) => {
                    if(err) throw err;
                    console.log(result);
                    res.send('tag updated');
                });
            }
            else{
                res.send('No tag found');
            }
        });
    }

});

router.post('/delete-from-bookmark', (req, res,next) => {
    var title = req.body.title;
    var id = req.body.id;
    var datetime = moment().format('YYYY-MM-DD hh:mm:ss');
    
    if(title && title != "" && title != null){
        let sql = 'SELECT id,tags FROM bookmarks WHERE title = ?';

        mysql_connection.query(sql,[title], (err,result) => {
            if(err) throw err;
            // console.log(result);
            if(result.length > 0){
                let new_id = result[0].id;
                var tags = result[0].tags;
                var tags = tags.replace(req.body.tag,'');
                console.log(tags);
                let sql = 'UPDATE bookmarks  set tags = ? ,time_updated = ? where id = ?';
    
                mysql_connection.query(sql,[tags,datetime,new_id], (err,result) => {
                    if(err) throw err;
                    console.log(result);
                    res.send('tag updated');
                });
            }
            else{
                res.send('No tag found');
            }
        });
    } 
    else if(id && id != "" && id != null){
        let sql = 'SELECT id,tags FROM bookmarks WHERE id = ?';

        mysql_connection.query(sql,[id], (err,result) => {
            if(err) throw err;
            
            
            if(result.length > 0){
                var tags = result[0].tags;
                var tags = tags.replace(req.body.tag,'');
                let sql = 'UPDATE bookmarks  set tags = ? ,time_updated = ? where id = ?';
    
                mysql_connection.query(sql,[tags,datetime,id], (err,result) => {
                    if(err) throw err;
                    console.log(result);
                    res.send('tag updated');
                });
            }
            else{
                res.send('No tag found');
            }
        });
    }
});



// module.exports = router;
exports.routes = router;