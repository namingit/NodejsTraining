// a message with parameter in routes using GET/POST/PUT/DELETE using routing in express js
var express = require('express');
var app = express();

var routex = require('./sampleroute1.js');
app.use('/api', routex);

app.listen(3000);
