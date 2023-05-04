var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

// Here we create a empty array with the name userClickedPattern.
var userClickedPattern = [];

// We use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function () {
	// Inside the handler, we create a new variable called userChosenColour to store the id of the button that got clicked.
	var userChosenColour = $(this).attr("id");

	// We add the contents of the variable userChosenColour to the end of this new userClickedPattern
	userClickedPattern.push(userChosenColour);
	//console.log(userClickedPattern);

	// In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
	playSound(userChosenColour);

    // We also need to add animatePress here to make animation live.
    animatePress(userChosenColour);
});

function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);

	// We use jQuery to select the button with the same id as the randomChosenColour
	// We use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button.
	$("#" + randomChosenColour)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	playSound(randomChosenColour);
}
// We create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
	// Then we take the code we used to play sound in the nextSequence() function and add it to playSound().
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColor) {
	// We use jQuery to add this pressed class to the button that gets clicked inside animatePress().
	$("#" + currentColor).addClass("pressed");

	// We remove the pressed class after a 100 milliseconds.
	setTimeout(function () {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}
