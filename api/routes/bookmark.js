const express = require('express');
const router = express.Router();
const path = require('path');

const mysql_connection = require('../../mysql_connection');
var moment = require('moment');
var length= 0;

router.get('/delete/:bookmarkId', (req, res,next) => {
    let id = req.params.bookmarkId;

    let sql = 'DELETE FROM bookmarks WHERE id = ?';
    
    mysql_connection.query(sql,[id], (err,result) => {
        if(err) throw err;
        console.log(result);
        //res.send('bookmark with id ' + id + ' deleted');
    });


    res.status(200).json({
        meesage: 'bookmark with id ' + id + ' deleted'
    });
});

router.get('/retrieve', (req, res,next) => {

    let sql = 'SELECT * from bookmarks';
    
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
    var link = req.body.link;
    var title = req.body.title;
    var publisher = req.body.publisher;
    var tags_array = req.body.tags;
    if(!tags_array){
        var tags_string_comma = "";
    }
    else {
        var tags_string_comma = tags_array.join();
    }
    
    var datetime = moment().format('YYYY-MM-DD hh:mm:ss');
    let sql = 'SELECT * FROM bookmarks WHERE link = ?';
    
   console.log(tags_string_comma);
    mysql_connection.query(sql,[link], (err,result) => {
        if(err) throw err;
        if(result.length == 0){
            sql = 'INSERT INTO bookmarks(link,title,tags,publisher,time_created) VALUES(?,?,?,?,?)';
            console.log(tags_string_comma);
            mysql_connection.query(sql,[link,title,publisher,tags_string_comma,datetime], (err,result) => {
                if(err) throw err;
                console.log(result);
                res.send('bookmark inserted');
            });
        }
        else{
            res.send('Bookmark with similar link exists!');
        }
    });
    
});


// module.exports = router;
exports.routes = router;
