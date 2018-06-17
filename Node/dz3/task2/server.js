let http = require("http");
let url = require("url");
let converter = require("convert.js");

let server = http.createServer();
server.listen(8080);

server.on("request", function(req, res) {
  res.writeHead(200, {"Content-Type":"text/plain"})
//что блин делать дальше. как это все склеить и заставить работатаь?!?!?!? доделать!!!