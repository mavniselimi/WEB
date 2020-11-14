var http = require('http');
var zaman = require('./zaman');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!'+zaman.myDateTime());
    res.end()
}).listen(8080);