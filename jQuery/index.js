// In jQuary is no deffrence for selecting all for example buttons or selecting one button (both these things we can do by simply add $ sign before ithem that we want to change!)

jQuery("h1").css("color", "green");

// When we write console.log($("h1").css("font-size")); we can simply check font size of our h1, but when the .css has 2 properties we change the property of font.

jQuery("h1").addClass("big-title");
$("h1").text("Bye");
$("button").html("<em>Hey</em>");

// We 
$("a").attr("href", "https://www.yahoo.com");
