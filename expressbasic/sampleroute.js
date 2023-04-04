var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    console.log("welcome to the GET express ");
     
    res.send("welcome to the GET express ");
 });
 router.post("/hello",function(req,res){
    console.log("welcome to the POST express ");
     
    res.send("welcome to the POST express ");
 });
 router.delete("/hai",function(req,res){
    console.log("welcome to the DELETE express ");
    res.send("welcome to the DELETE express");
 });

 router.put("/how",function(req,res){
    console.log("welcome to the PUT express ");
     
    res.send("welcome to the PUT express");
 });

 router.patch("/you",function(req,res){
    console.log("welcome to the PATCH express ");
     
    res.send("welcome to the PATCH express");
 });

 module.exports = router;
