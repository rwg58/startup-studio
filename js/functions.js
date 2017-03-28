

var concerns = ['Acne', 'Dry', 'Dull', 'Anti-Aging', 'Dark Circles']
var concernToIngredient = new map();
map.set(concerns[0], ['Vitamin C', 'Retinol', 'Zinc', 'Salicylic acid', 'Witch hazel', 'Licorice'])
map.set(concerns[1], ['Vitamin E', 'Niacinamide', 'Glycolic Acid', 'Hyaluronic Acid', 'Tahitian Black Pearl Essence'])
map.set(concerns[2], ['Olive Extract', 'Resveratrol'])




$(document).ready(function() {
    console.log( "ready!" );
});

function updateSkinType(skinType){
    
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