const port = 4000;

//BODY parse of requistion

const bodyParser = require('body-parser');

const express = require('express');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.json());

server.listen(process.env.PORT || port, function () {

    console.log('Listening on');

});

server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

module.exports = server