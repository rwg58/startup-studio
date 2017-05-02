var concerns_list = ['acne', 'dry', 'oily', 'dull', 'dark-spot', 'aging'];
var goals_list = ['balancing', 'hydrating', 'oilControl', 'brightening', 'colorCorrecting', 'anti-aging'];

var ingredient = new Map();
ingredient.set(0,['Tea tree', 'Lavender']);
ingredient.set(1,['Sandalwood', 'Myrrh']);
ingredient.set(2,['Orange', 'Bergamot']);
ingredient.set(3,['Lemon', 'Bergamot']);
ingredient.set(4,['Lemon', 'Frankincense']);
ingredient.set(5,['Tangerine', 'Frankincense']);

var related_concerns = new Map();
related_concerns.set(0, [2, 4]);
related_concerns.set(1, [3, 5]);
related_concerns.set(2, [0, 3]);
related_concerns.set(3, [4, 5]);
related_concerns.set(4, [1, 5]);
related_concerns.set(5, [1, 3]);

// related_ingredient.set(concerns[5],['Tangerine', 'Frankincense']);related_ingredient.set(concerns[0],['Tea tree', 'Lavender']);
// related_ingredient.set(concerns[1],['Sandalwood', 'Myrrh']);
// related_ingredient.set(concerns[2],['Orange', 'Bergamot']);
// related_ingredient.set(concerns[3],['Lemon', 'Bergamot']);
// related_ingredient.set(concerns[4],['Lemon', 'Frankincense']);
// related_ingredient.set(concerns[5],['Tangerine', 'Frankincense']);

// related_ingredient.set(concerns[1], ['Vitamin E', 'Niacinamide', 'Glycolic Acid', 'Hyaluronic Acid', 'Tahitian Black Pearl Essence'])
// related_ingredient.set(concerns[2], ['Olive Extract', 'Resveratrol'])

$(document).ready(function() {
    console.log( "ready!" );
});


var skinTypes = new Array();
var allergyStatus = new Array();

function updateSkinType(skinType){	
    
    $('#'+skinType).toggleClass("selected");
    
    if($('#'+skinType).hasClass("selected")){
        skinTypes.push(skinType);
        
        $(".skin_face").attr("src", "images/"+ skinType +".jpg");
        
    }else{
        $(".skin_face").attr("src", "images/normal.jpg");
        
        var index = skinTypes.indexOf(skinType);
        
        if (index > -1) {
            skinTypes.splice(index, 1);
        }
    }
    
    localStorage.setItem("skintype", JSON.stringify(skinTypes));
    
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

function displayBottles(){
    var diyname = $('#diyproduct').val();
    $('.bottle_box').show();
    $('.bname p').text(diyname);
}

function selectBottle(postion){
    $('.bottle_selected').removeClass("bottle_selected");
    $('#'+postion).toggleClass("bottle_selected");
}

