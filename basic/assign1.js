var http=require('http');


http.createServer(function(req,res){    //A callback function , actually a request listener
 
  res.writeHead(200, {'Content-Type':'text/html'}) //http status code, content-type(optional)
  res.write("welcome to hello world in nodejs program"); //sends back to client
  res.end('complete the program') //Ends the response with a string

  console.log('inside the nodejs programming');

}).listen(8080);  //post number; createserver provides a server object listening to request
