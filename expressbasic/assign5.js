var express = require('express');
var app = express();

var routex = require('./logger.js');

//both assign5.js and logger.js should be in same directory
app.use('/api', routex);

app.listen(3000);
