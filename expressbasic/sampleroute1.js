var express = require('express');
var router = express.Router();

router.get("/:id",function(req,res){
    console.log("welcome to the GET express "+req.params.id);
     
    res.send("welcome to the GET express "+ req.params.id);
 });
 router.post("/hello/:name",function(req,res){
    console.log("welcome to the POST express "+req.params.name);
     
    res.send("welcome to the POST express "+req.params.name);
 });
 router.delete("/hai/:id",function(req,res){
    console.log("welcome to the DELETE express "+req.params.id);
     
    res.send("welcome to the DELETE express"+req.params.id);
 });

 router.put("/how/:id",function(req,res){
    console.log("welcome to the PUT express "+req.params.id);
     
    res.send("welcome to the PUT express"+req.params.id);
 });

 router.patch("/you/:id",function(req,res){
    console.log("welcome to the PATCH express "+req.params.id);
     
    res.send("welcome to the PATCH express"+req.params.id);
 });

 module.exports = router;
