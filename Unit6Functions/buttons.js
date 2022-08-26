// let var = document.getElementById("name of Id");

// document = keyword in js that represents the page (test in console-- will highlight the page)

// document. pulls up all these properties (test in console)

//getElementById = gets element only if it has an id (which u type in) -- it's a function that returns an element

let clickMeButt = document.getElementById("butt1");

clickMeButt.onclick = function() { //when button (the element) is clicked --- function = generic function
    console.log("ouch, you clicked me");
}
//won't run until u put "defer" after the js file name in the html doc (u already have this) bc the html thing goes top to bot and the js runs first b4 the button is even created

let noClickMeButt = document.getElementById("butt2");

noClickMeButt.onclick = function() 
{
    console.log("You clicked the button!");
}