var http = require('http');
var fs = require('fs'); //import the fs builtin module, fs is the module to fetch files
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('calc.js', function(err, data) {          //reading file ; an error first callback is called
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);                                    //writing data fetched from the file and writes to client
    return res.end();
  });
}).listen(8080);
