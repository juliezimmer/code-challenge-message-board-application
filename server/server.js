var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('');
var name = require('');
var message = require('');



//middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

//Express Routes
app.use('/', index);
app.use('/name', name);
app.use('/message', message);


//Mongoose connection
var databaseUrl = 'mongodb://localhost77017/messages';
mongoose.connect(databaseUrl,
    {
        useMongoClient: true
    });
mongoose.connection.on('connected', function() {
    console.log('mongoose connected to:', databaseUrl;
});

mongoose.connection.on('error', function(err) {
    console.log('mongoose connection error to: ', err);
});



//start the server
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Server is listening on port:', port);
});