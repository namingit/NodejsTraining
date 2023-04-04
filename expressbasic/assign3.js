//a welcome message using GET/POST/PUT/DELETE using routing in express js
var express = require('express');
var app = express();

var routex = require('./sampleroute.js');

//both assign3.js and sampleroute.js should be in same directory
app.use('/api', routex);

app.listen(3000);

