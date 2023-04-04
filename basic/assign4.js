var http = require('http')

const { getEmail } = require('./userinfo.js');
// var user = require('./userinfo.js')

http.createServer(function(req,res){
    //exports 
    // res.end('user.getName ::'+user.getName()+" :: "+user.getEmail() + " :: "+user.getLocation());
    res.end('user.getEmail  :: "+user.getEmail() ');
    // console.log('user.getName ::'+user.getName()+" :: "+user.getEmail() + " :: "+user.getLocation());
}).listen(8080);
