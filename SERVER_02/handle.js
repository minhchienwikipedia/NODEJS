var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html"});

	// Exp 1
	// var data = fs.readFileSync(__dirname + '/index.html','utf-8');
	// data = data.replace('{name}','MinhChien');
	// res.end(data);

	// Exp 2
	var data = fs.createReadStream(__dirname + '/index.html','utf-8').pipe(res);
}).listen(8888);