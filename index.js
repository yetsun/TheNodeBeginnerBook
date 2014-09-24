var server = require("./server");
var router = require("./router");
var handle = require("./requesthandler.js");

server.start(router.route, handle);

