var http = require("http");
var url = require("url");


function start(route, handle){
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log("request for " + pathname + " recieved ");

		route(handle, pathname, res);
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started and listening 8888");




}


exports.start = start;
