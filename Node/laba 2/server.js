var http = require("http");
var fs = require('fs');
var url = require("url");var path = require('path');
var mineTypes = {
	'.js' : 'text/javascript',
	'.html': 'text/html',
	'.gif' : 'image/gif',
	'.css' : 'text/css'
};
var serv = http.createServer(function onRequest(request, response) {
	var pathname =  url.parse(request.url).path;
		if(pathname =='/') {
			pathname = '/index.html';
		}
	var extname = path.extname(pathname);
	console.log(extname);
	var mineType = mineTypes[path.extname(pathname)];
	pathname = pathname.substring(1, pathname.length);
		if ((extname == '.gif') || (extname == '.jpg')){
			var img = fs.readFileSync('./' + pathname);
			response.writeHead(200, {'Content-Type': mineType});
			response.end(img, 'binary');
		} else {
			fs.readFile(pathname,'utf8', function(error, data){
		if (error) {
      console.log('Could not find or open file for reading' + pathname + '  for reading\n');
		} else {
       response.writeHead (200, {'Content-Type': mineType});
       response.end(data);
        }
})
}
});
	serv.listen(8080);
	console.log('ok');