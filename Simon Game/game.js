var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

//3f. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//1d. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function(){
    
    //2e. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
    
    //4g. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
    
    //console.log(userClickedPattern);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    //1a. Use jQuery to select the button with the same id as the randomChosenColour
    //2b. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    //3c. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}