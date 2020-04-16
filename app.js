const http = require('http');
const express = require('express');

const body_parser = require('body-parser');


const mysql_connection = require('./mysql_connection');
const bookmarkData = require('./api/routes/bookmark');
const tagData = require('./api/routes/tags');

const app = express();

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

app.use('/bookmark',bookmarkData.routes);
app.use('/tags',tagData.routes);


const server = http.createServer(app);

server.listen(3000);