


function build_gmap_marker(address,title,index,infoWindowContent,htmlContent,markerIcon) {
	// Takes a regular address (San Francisco, CA), geocodes it, attaches title , index is for using
	// this in a loop to define a bunch of addresses and dynamically create marker vars (marker_1,marker_2)
	// the_content (defined in init) - is an array to use to dynamically only show one popup window
	// would be better to accept a json param of some sort to make styling the marker behaviors faster.
	geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
		map.setCenter(results[0].geometry.location);
		marker_options  = {map: map, position: results[0].geometry.location, animation: google.maps.Animation.DROP,title:title};
		// probably could create more method params to better define the marker object (or even just take a marker)
		// dynamically creates markers
		if(markerIcon != undefined){
			marker_options.icon = markerIcon;
		}else{
			markerIcon ='';
		}
		eval( "this.marker_"+ index +" = new google.maps.Marker(marker_options);");
		// select the window data based on a div that is address_post_ + whatever the index that is passed
		// to properly refer to indices of the elements
		// add a listener without creating another variable. Switches out the content of one 'infowindow' instead of 
		// keeping track of multiple inputwindows (lets us only print one to screen at a time without worrying about closing others)
		if(infoWindowContent != undefined && htmlContent != undefined){
			eval("google.maps.event.addListener(marker_"+index+", 'click', function() {infowindow.setContent(infoWindowContent);document.getElementById('content_display').innerHTML = htmlContent;infowindow.open(map, marker_"+index+");});")
		}	
    } else {
		// just in case the address does not return anything ...
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

