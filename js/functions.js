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