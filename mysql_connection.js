const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'triveous'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('database Connected');
});

module.exports = db;