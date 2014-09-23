var http = require("http");
var url = require("url");

function start(route){
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log("request for " + pathname + " recieved ");

        route(pathname);

        res.writeHead(200, {"Content-Type":"text/plain"});
        res.write("helloooo world");
        res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started and listening 8888");




}


exports.start = start;
