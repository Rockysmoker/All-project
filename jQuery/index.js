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

