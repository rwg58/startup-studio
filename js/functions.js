function updateSkinType(skinType){
    
	document.getElementById(skinType).setAttribute("class",'selected');	
	
	if (skinType!="dry"){
		document.getElementById('dry').setAttribute("class",'unselected');
	}
	if (skinType!="acne"){
		document.getElementById('acne').setAttribute("class",'unselected');
	}
	if (skinType!="oily"){
		document.getElementById('oily').setAttribute("class",'unselected');
	}
	if (skinType!="sensitive"){
		document.getElementById('sensitive').setAttribute("class",'unselected');
	}
}

function updateAllergStatus(allergyStatus){
    
	document.getElementById(allergyStatus).setAttribute("class",'selected');	
	
	if (allergyStatus!="allergyYes"){
		document.getElementById('allergyYes').setAttribute("class",'unselected');
	}
	if (allergyStatus!="allergyNo"){
		document.getElementById('allergyNo').setAttribute("class",'unselected');
	}
}


function updateGoals(goals){
    
	document.getElementById(goals).setAttribute("class",'selected');	
	
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