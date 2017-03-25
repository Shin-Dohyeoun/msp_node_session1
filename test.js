var http = require('http');
var port = 3000;
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Node JS!</h1>');
    res.end();
}).listen(port);