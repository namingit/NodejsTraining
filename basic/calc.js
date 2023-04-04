//for assignment 3 and 5
//creating addition subtraction module

var addition = function(a, b){
    return a+b;
   }
   
   var subtraction = function(a,b){
    return b-a;
   }
   
   var multiplication = function(a,b){
    return a*b;
   }
   
   module.exports.add = addition;
   module.exports.sub = subtraction;
   module.exports.mul = multiplication;
   