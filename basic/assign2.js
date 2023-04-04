var http = require('http')

http.createServer(function(req,res){{

    res.writeHead(200,{'ContentType':'text/html'}); //tells header the status code and the type of request
    var firstNumber = 10;
    var secondNumber =20;

    var thirdNumber = firstNumber + secondNumber;
    res.end('output::'+thirdNumber); //ending the response with the output
    
    console.log('addition is::'+thirdNumber);
}}).listen(8080);