function route(handle, pathname, res){
    console.log("route " + pathname);
	
	
	if(pathname.toLowerCase() == "/start"){
		handle.start(res);
	}else if(pathname.toLowerCase() == "/upload"){
		handle.upload(res);
	}else{
		handle.notFound(res);
	}

}





exports.route = route;
