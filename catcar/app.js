var http = require('http');

var fs = require('fs');
var server = http.createServer(function (request,response){
	console.log('client request URL: ', request.url);
	if(request.url === '/') {
		fs.readFile('views/index.html', 'utf8', function(errors, contents){
			console.log(errors);
			console.log(contents);
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();	
		});
	}
	else if(request.url === '/cats.html') {
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			console.log(errors);
			console.log(contents);
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();	
		});
	}
	else if(request.url === '/cars.html') {
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			console.log(errors);
			console.log(contents);
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();	
		});
	}
	else if(request.url ==='/images/Russian_blue.jpg'){
		fs.readFile('views/images/Russian_blue.jpg', function(errors, contents){
			console.log(errors);
			console.log(contents);
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();	
		});
	}
	else {
		response.writeHead(404);
		response.end('File not Found!!!');
	}
	});
	server.listen(6789);
	console.log("Running in localhost at port 6789");
