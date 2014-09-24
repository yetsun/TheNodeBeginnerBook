var exec = require("child_process").exec;

function start(res) {
	console.log("Request handler 'start' was called.");
	
	
	/*
	//blocking
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);
	*/
	
	
	exec("ls -lah", function (error, stdout, stderr){

	    res.writeHead(200, {"Content-Type":"text/plain"});
	    res.write(stdout);
	    res.end();		
		
	});
	
}


function upload(res) {

    res.writeHead(200, {"Content-Type":"text/plain"});
    res.write("**************Hello Upload");
    res.end();
	
	
	
	console.log("Request handler 'upload' was called.");
}


function notFound(res){

    res.writeHead(404, {"Content-Type":"text/plain"});
    res.write("404 Not found");
    res.end();
	
}


exports.start = start;
exports.upload = upload;
exports.notFound = notFound;