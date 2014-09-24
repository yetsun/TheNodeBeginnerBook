function route(handle, pathname){
    console.log("route " + pathname);
	
	
	if(pathname.toLowerCase() == "/start"){
		return handle.start();
	}else if(pathname.toLowerCase() == "/upload"){
		return handle.upload();
	}else{
		console.log("No request handler found for " + pathname);
		return "404 Not found";
	}

}





exports.route = route;
