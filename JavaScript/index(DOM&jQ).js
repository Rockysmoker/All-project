/*---------------INNER HTML & TEXT CONTENT & EVENT LISTENER----------------------*/

//   .document.querySelector("h1").textContent; //textContent zmienia tylko text który jest zawarty w h1
//   .document.querySelector("h1").innerHTML ="<em>Good Bye</em>"   // innerHTML zmienia nie tylko tekst ale możemy też zmienić wygląd bo dodaje wszystko do h1

//document.querySelector ("button").addEventListener("click",handleClick);  //dodaje działanie do button

/*   
function handleClick () {
    alert ("I got clicked!");
}  
 */

var houseKeeper1 = {
	yearsOfExpirience: 12,
	name: "Jane",
	cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
	moveSuitcase: function () {     //możemy dodać funkcję 
		alert("May I take your suitcase?");
		pickUpSuitcase();
		move();
	},
};

/*---------------CONSTRUCTOR FACTORY---------------*/
// najpierw tworzymy fabrykę w której tworzymy nowy var
// dla każdego nowego pracownika tworzymy var który jest oparty na fabryce
// ważne jest new i pożniej specyfikacja

function HouseKeeper(yearsOfExpirience, name, cleaningRepertoire) {
	this.yearsOfExpirience = yearsOfExpirience;
	this.name = name;
	this.cleaningRepertoire = cleaningRepertoire;
	this.clean = function () {
		alert("Cleaning in progress...");
	};
}

var houseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);

/*-----------------Higher order function---------------------*/


document.addEventListener("keypress", respondToKey(event));
function respondToKey(event){
	console.log("Key pressed!");
}

/*------------------------jQuery-----------------------------*/

// In jQuary is no deffrence for selecting all for example buttons or selecting one button (both these things we can do by simply add $ sign before ithem that we want to change!)

jQuery("h1").css("color", "green");

// When we write console.log($("h1").css("font-size")); we can simply check font size of our h1, but when the .css has 2 properties we change the property of font.

jQuery("h1").addClass("big-title");
$("h1").text("Bye");
$("button").html("<em>Hey</em>");

// We can add using attr difrenf page to our href
$("a").attr("href", "https://www.yahoo.com");

// Below we got the function that change css color for purple by clicking on h1 element

$("h1").click(function () {
	$("h1").css("color", "purple");
});

// Here we got 2 cases:
//First we write pure JS code without jQuery
for (var i = 0; i < 5; i++) {
	document.querySelectorAll("button")[i].addEventListener("click", function () {
		document.querySelector("h1").style.color = "purple";
	});
}
//Second we write the same thing but with jQuery, its a lot shorter
$("button").click(function () {
	$("h1").css("color", "purple");
});

//Below we got function that chaging the h1 by showing the keys that we press on keyboard 
$(document).keypress(function (event) {
	$("h1").text(event.key);
});

// In this case we got the function that looking for mouse movin over the h1, then change the color of h1.
$("h1").on("mouseover", function () {
	$("h1").css("color", "pink");
});