var http = require('http'); 
var serv = http.createServer(function (request, response) {
console.log("HTTP works!");
response.writeHead(200, {'Content-Type': 'text/html'});
response.write('<hl>Hello!</hl>');
response.end(); 
 });
 serv.listen(8080);
