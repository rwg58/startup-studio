function updateBottle(skinType){
    
	document.getElementById(skinType).setAttribute("class",'selected');	
	localStorage.setItem("skintype", skinType);
    
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