function search_special_tag(tags,tag){
	// searches for a coded tag that starts with whatever is in tag, returns
	// the matching string in the passed array, sans the originally coded word
	// false otherwise
	if(tags instanceof Array){
		for(t=0;t<tags.length;t++){
			if(tags[t].search(tag) == 0){
				return tags[t].replace(tag,"") ;
			}
		}
	}
	return false;
}

function build_post(post,index){

	address = search_special_tag(post["tags"],'address');
	if(address){
		var infoWin= '';
		if(post["photos"].length >0){
			for(z=0;z <= post["photos"].length - 1;z++){
			if(z != undefined){
					infoWin +=  '<img src="' + post["photos"][z]["photo-url-500"]   + '"/>';
				}
			}
		}else{
			infoWin +='<img src="' + post["photo-url-500"] + '"/>';
		}
		build_gmap_marker(address,address, index, infoWin,post["photo-caption"],post["photo-url-75"]);
	}
	// process this post differently...
}
