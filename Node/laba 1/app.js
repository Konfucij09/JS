var http = require('http');
var fs = require('fs'); 
var fileName = "index.html";
var serv = http.createServer(function(req, res) {
	fs.readFile(fileName, 'utf8', function(err, data) {
		if (err) {
			console.log('Could not find or open file for reading\n' );
		}
		else {
			res.writeHead(200, {'Content-Type': 'text/html'});
 			res.end(data);
		}
	})
})
serv.listen (8080);