// Write a helloworld message using express js framework

var express = require('express');//import the express module
var app = express();    //create an instance
app.get('/', function (req, res) {      //A GET request is made
    res.send('Hello World');            //sends back a response to the client
 })

 var server = app.listen(8081, function () {        //server working on port8081
    var host = server.address().address             //address of server
    var port = server.address().port                //port number of server
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
