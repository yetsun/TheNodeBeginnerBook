var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

	
	
function welcome(req, res){	
	res.writeHead(200, {"Content-Type":"text/html"});
	res.write("Welcome!");
	res.end();
}	


function start(req, res) {
	console.log("Request handler 'start' was called.");
	
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" '+
	'content="text/html; charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" enctype="multipart/form-data" '+
	'method="post">'+
	'<input type="file" name="upload" multiple="multiple">'+
	'<input type="submit" value="Upload file" />'+
	'</form>'+
	'</body>'+
	'</html>';
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(body);
	res.end();

	
}


function upload(req, res) {
	
	var form = new formidable.IncomingForm();
	
	form.parse(req, function(error, fields, files) {
		console.log("parsing done");
		/* Possible error on Windows systems:
		tried to rename to an already existing file */
		fs.rename(files.upload.path, "/tmp/test.png", function(error) {
			if (error) {
				fs.unlink("/tmp/test.png");
				fs.rename(files.upload.path, "/tmp/test.png");
			}
		});
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("received image:<br/>");
		res.write("<img src='/show' />");
		res.end();
	});
	

	
	
	console.log("Request handler 'upload' was called.");
}


function show(req, res) {
	console.log("Request handler 'show' was called.");
	fs.readFile("/tmp/test.png", "binary", function(error, file) {
		if(error) {
			res.writeHead(500, {"Content-Type": "text/plain"});
			res.write(error + "\n");
			res.end();
		} else {
			res.writeHead(200, {"Content-Type": "image/png"});
			res.write(file, "binary");
			res.end();
		}
	});

}




function notFound(req, res){

    res.writeHead(404, {"Content-Type":"text/plain"});
    res.write("404 Not found");
    res.end();
	
}


exports.start = start;
exports.upload = upload;
exports.show = show;
exports.welcome = welcome;
exports.notFound = notFound;