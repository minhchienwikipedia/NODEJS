var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('05 - Server - Duong Minh Chien');
}).listen(8888);
