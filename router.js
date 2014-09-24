function route(handle, pathname, req, res){
    console.log("route " + pathname);
	
	
	if(pathname.charAt(0) == "/"){
		pathname = pathname.substring(1);
	}
	
	if(pathname.charAt(pathname.length-1) == "/"){
		pathname = pathname.substring(0, pathname.length-1);
	}
	
	if(pathname == ""){
		pathname = "welcome";
	}
	
	console.log("method name:"  + pathname);
	
	
	var handlemethod = eval("handle." + pathname.toLowerCase());
	
	if(typeof(handlemethod) == "function"){
		handlemethod(req, res);
	}else{
		handle.notFound(req, res);
	}
	

}





exports.route = route;
