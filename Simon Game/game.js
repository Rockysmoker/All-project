var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

// Here we create a empty array with the name userClickedPattern.
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
	if (!started) {
		$("#level-title").text("Level " + level);
		nextSequence();
		started = true;
	}
});

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

	// WE call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
	checkAnswer(userClickedPattern.length - 1);
});

// We create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
	// We write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		console.log("success");

		// If the user got the most recent answer right before, then check that they have finished their sequence with another if statement.
		if (userClickedPattern.length === gamePattern.length) {
			// We call nextSequence() after a 1000 millisecond delay.
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		console.log("wrong");
		// In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
		playSound("wrong");

		// In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
		$("body").addClass("game-over");
		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);

		// Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
		$("#level-title").text("Game Over, Press Any Key to Restart");

		// Call startOver() if the user gets the sequence wrong.
		startOver();
	}
}

function nextSequence() {
	//Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
	userClickedPattern = [];

	level++;
	$("#level-title").text("Level " + level);
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
//  Create a new function called startOver().
function startOver() {
	// Inside this function, you'll need to reset the values of level, gamePattern and started variables.
	level = 0;
	gamePattern = [];
	started = false;
}
