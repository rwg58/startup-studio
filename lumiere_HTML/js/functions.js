var skinTypes = new Array();
var allergies = new Array();
var goals = new Array();

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

    $('#'+allergyStatus).toggleClass("selected");

    if($('#'+allergyStatus).hasClass("selected")){

        allergies.push(allergyStatus);

    }else{

        var index = allergies.indexOf(allergyStatus);

        if (index > -1) {
            allergies.splice(index, 1);
        }
    }

    localStorage.setItem("allergyStatus", JSON.stringify(allergies));
    var alg = JSON.parse(localStorage.getItem("allergyStatus"));

    console.log(alg);

}

function updateGoals(goal){

    $('#'+goal).toggleClass("selected");

    if($('#'+goal).hasClass("selected")){

    	goals.push(goal);

        $(".desc_box").show();

        if (goal == "balancing"){
            $(".goals_desc").text("The pH scale measures acidity and alkalinity. By selecting “balancing” your serum will help keep your skin " +
				"at the perfect level of acidity and alkalinity to avoid breakouts or dryness.");

            $(".ingredients_needed").text("tea tree, Geranium, Lavender, Patchouli");
        }
        if (goal == "hydrating"){
            $(".goals_desc").text("Hydrating products are designed to increase the water content of the skin. This ingredient not only adds moisture" +
				" to the skin but helps to keep the moisture from leaving the skin. ");
            $(".ingredients_needed").text("Cedarwood, Geranium, Myrrh, Sandalwood, Palmarosa, Roman or German Chamomile");
        }
        if (goal == "color_correcting"){
            $(".goals_desc").text("Uneven skin tone can be the result of a number of different things. Known as hyperpigmentation, " +
				"uneven skin tone is most often the result of an overproduction of melanin. Responsible for giving your hair and skin its " +
				"gorgeous color, melanin also helps to protect your skin against the damaging UV rays of the sun.");

            $(".ingredients_needed").text("Lavender, Lemon, and grkFrankincense");
        }
        if (goal == "oil_control"){
            $(".goals_desc").text("Your skin overproduces oil. This ingredient will help control the oil and curb the shine. Excess oil can " +
				"also cause acne breakouts so including oil control won’t just curb the shine but also the breakouts.");

            $(".ingredients_needed").text("Orange, Lemon, Lime, Bergamot, Geranium, Cypress");
        }
        if (goal == "anti_aging"){
            $(".goals_desc").text("The process of aging due to changes in the structure and elasticity of the skin over time. " +
				"It may be a part of physiological aging or it may be due to the effects of ultraviolet radiation, " +
				"usually through exposure to sunlight.");

            $(".ingredients_needed").text("Tangerine, Ylang-ylang, Patchouli, Cypress, Sandalwood, Lavender, Frankincense, Rose, and Palmarosa");
        }
        if (goal == "brightening"){
            $(".goals_desc").text("This ingredients targets hyperpigmentation and inflammation. Skin brightening can help with acne scars, " +
				"age spots, or sun spots");

            $(".ingredients_needed").text("Lavender, Lemon, and grk Frankincense");
        }

    }else{
        var index = goals.indexOf(goal);

        if (index > -1) {
            goals.splice(index, 1);
        }
    }

    localStorage.setItem("goals", JSON.stringify(goals));

    var storedNames = JSON.parse(localStorage.getItem("goals"));
    console.log(storedNames);

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

function showIngredients() {

    var selectedGoals = JSON.parse(localStorage.getItem("goals"));
    var goals_list = ['balancing', 'hydrating', 'oil_control', 'brightening', 'color_correcting', 'anti_aging'];

    var ingredient = new Map();
    ingredient.set(0,['  Tea tree 25% ', '  Lavender 25%  ']);
    ingredient.set(1,[' Sandalwood 25% ', '   Myrrh 25%   ']);
    ingredient.set(2,['   Orange 25%  ', '  Bergamot 25%  ']);
    ingredient.set(3,['   Lemon 25%   ', '  Bergamot 25%  ']);
    ingredient.set(4,['   Lemon 25%   ', 'Frankincense 25%']);
    ingredient.set(5,[' Tangerine 25% ', 'Frankincense 25%']);

    var pt_1 = goals_list.indexOf(selectedGoals[0]);
    var pt_2 = goals_list.indexOf(selectedGoals[1]);

    for(var i = 1; i < 3; i++){

        $(".left_word_" + i).text(ingredient.get(pt_1)[i-1]);
	}

    for(var i = 1; i < 3; i++){

        $(".right_word_" + i).text(ingredient.get(pt_2)[i-1]);
    }

}

var scents = new Array();
function updateScent(scent) {

    $('#'+scent).toggleClass("selected");

    if($('#'+scent).hasClass("selected")){
        scents.push(scent);

    }else{

        var index = scents.indexOf(scent);
        if (index > -1) {
            scents.splice(index, 1);
        }
    }

    localStorage.setItem("scent", JSON.stringify(scents));
    var storedNames = JSON.parse(localStorage.getItem("scent"));

    console.log(storedNames);
}