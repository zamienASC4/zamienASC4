function getParam(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)'.exec(window.location.href0;
	if(results){
		return results[1];
	}else{
		return undefined;
	}
}
