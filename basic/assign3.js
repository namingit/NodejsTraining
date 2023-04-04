//an application program to perform addition, subtraction, multiplication of two numbers using nodejs module concept
var http = require('http')
var cal = require('./calc.js')


http.createServer(function(req,res){
    res.writeHead(200,{'ContentType':'text/html'});
    res.write('addition ::'+cal.add(10,20) );

    res.write(' subtraction ::'+cal.sub(10,20));

    res.end(' multiplication ::'+cal.mul(10,20));
    console.log('completed');
    
}).listen(9000); //server listening to port 9000
