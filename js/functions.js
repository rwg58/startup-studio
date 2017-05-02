var skinTypes = new Array();
var allergyStatus = new Array();

function updateSkinType(skinType){	
    
    $('#'+skinType).toggleClass("selected");
    
    if($('#'+skinType).hasClass("selected")){
        
        skinTypes.push(skinType);
        localStorage.setItem("skintype", JSON.stringify(skinTypes));
        
    }else{
        
        var index = skinTypes.indexOf(skinType);
        
        if (index > -1) {
            skinTypes.splice(index, 1);
        }
        
        localStorage.setItem("skintype", JSON.stringify(skinTypes));
    }
    
    var storedNames = JSON.parse(localStorage.getItem("skintype"));
    console.log(storedNames);
}

function updateAllergStatus(allergyStatus){
    
	document.getElementById(allergyStatus).setAttribute("class",'selected');
    localStorage.setItem("allergyStatus", allergyStatus);
	
	if (allergyStatus!="allergyYes"){
		document.getElementById('allergyYes').setAttribute("class",'unselected');
	}
	if (allergyStatus!="allergyNo"){
		document.getElementById('allergyNo').setAttribute("class",'unselected');
	}

}

function updateGoals(goals){
    
	document.getElementById(goals).setAttribute("class",'selected');	
	localStorage.setItem("goals", goals);
    
	if (goals!="balancing"){
		document.getElementById('balancing').setAttribute("class",'unselected');
	}
	if (goals!="hydrating"){
		document.getElementById('hydrating').setAttribute("class",'unselected');
	}
	if (goals!="colorCorrecting"){
		document.getElementById('colorCorrecting').setAttribute("class",'unselected');
	}
	if (goals!="oilControl"){
		document.getElementById('oilControl').setAttribute("class",'unselected');
	}
	if (goals!="antiAging"){
		document.getElementById('antiAging').setAttribute("class",'unselected');
	}
	if (goals!="brightening"){
		document.getElementById('brightening').setAttribute("class",'unselected');
	}
}