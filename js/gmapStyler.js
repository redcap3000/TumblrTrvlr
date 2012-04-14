// GoogleMaps Styler
// Ronaldo Barbacahno April 2012
// doinglines.com

// Easier to read syntax for customizing Gmaps great for protyping and reducing code footprint

// May consider using 'eval' for make_map_styler

//******* USAGE *********//

//make_map_style(featureType,elementType,stylers)
// **************
// Generates a map style to be passed into a google maps object, all fields required.

// make_map_styler(hue,sat,lightness,gamma,visibility) 
// **************
// generates a 'style structure' with above params
// pass undefined or null to avoid setting the parameter (overloadable)


function make_map_style(featureType,elementType,stylers){
	// validate feature and element types 
	// makes it easier to look/create at map styles without digesting a bunch of json
	
	v =  {
	      featureType: featureType,
	      elementType: elementType,
	      stylers: [stylers]
	    };
	return v;
	
}

function make_map_styler(mapHue,mapSaturation,mapLightness,mapGamma,visibility){
	// you can pass false or undefined to any parameter to avoid processing it.
	// builds an array with appropriate directives for style definition of maps
	// use eval to reduce code?
	the_style = Array;
	
	if(typeof mapHue != undefined){
		the_style.hue = mapHue;
	}
	
	if(typeof mapSaturation != undefined){
		the_style.saturation = mapSaturation;
	}
	if(typeof mapLightness != undefined){
		the_style.lightness = mapLightness;
	}
	if(typeof mapGamma != undefined){
		the_style.gamma = mapLightness;
	}
	if(typeof visibility != undefined ){
		the_style.visibility = mapLightness;
	}

	return the_style;
	
}
