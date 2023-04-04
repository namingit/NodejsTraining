//a welcome message using GET/POST/PUT/DELETE using express js framework

var express = require('express');
var app = express();

app.get("/",function(req,res){
    console.log("welcome to the GET express ");
     
    res.send("welcome to the GET express ");
 });
 app.post("/hello",function(req,res){
    console.log("welcome to the POST express ");
     
    res.send("welcome to the POST express ");
 });
 app.delete("/hai",function(req,res){
    console.log("welcome to the DELETE express ");
     
    res.send("welcome to the DELETE express");
 });
 app.put("/how",function(req,res){
    console.log("welcome to the PUT express ");
     
    res.send("welcome to the PUT express");
 });

 app.patch("/you",function(req,res){
    console.log("welcome to the PATCH express ");
     
    res.send("welcome to the PATCH express");
 });

app.listen(3000);
