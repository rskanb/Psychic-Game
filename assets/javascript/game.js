

var letters = ["a", "l", "c", "b"];
var wins = 0;
var losses = 0;
var guesses = 9;
// var userChoiceText = [];
var letterToGuess = null;
var userChoiceText1 = [];
var compChoiceText = [];

// var directionsText = document.getElementById("directions-text");
// var userChoiceText1 = document.getElementById("userchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var guessLeftText = document.getElementById("guessleft-text");

var updateGuessesLeft = function(){
    document.querySelector("#guessleft-text").innerHTML = guesses;
};

// var updateLetterToGuess = function(){
//     var letterToGuess = letters[Math.floor(Math.random() * letters.length)];
// };
var updateLetterSoFar = function(){
    document.querySelector("#userchoice-text").innerHTML = userChoiceText1.join(", ");
};

var compLetter = function(){
    //document.querySelector("#comp-text").textContent = letterToGuess;
    document.getElementById("comp-text").innerHTML = compChoiceText.join(", ");
};

function resetGame(){
    guesses = 9;
    userChoiceText1 = [];
    compChoiceText = [];
    updateGuessesLeft();
    // updateLetterToGuess();
    updateLetterSoFar();
    compLetter();
};
// function userChoiceReset(){
//     userChoiceText = [];
// }
// updateLetterToGuess();
updateGuessesLeft();
// resetGame();
document.onkeyup = function(event){
    
    var letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    var letter = String.fromCharCode(event.which).toLowerCase();
    // var  letter = event.key.toLowerCase();
    guesses--;
    userChoiceText1.push(letter);
    compChoiceText.push(letterToGuess);
    updateGuessesLeft();
    updateLetterSoFar();
    compLetter();
    //document.getElementById("comp-text").innerHTML += letterToGuess;
    // var userGuess = event.key.toLowerCase();
    // userChoiceText.push(userGuess);
    // console.log(userGuess);
    // console.log(userChoiceText);
    // userChoiceText1.textContent = "You guess: " + userChoiceText;
    // var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    // console.log(computerGuess);
    if (letter === letterToGuess) {
        wins++;
        document.querySelector("#wins-text").innerHTML = wins;
        // var newText = userChoiceText.push(userGuess);
        resetGame();
    }
    // } else  {
    //     wins++;
    //     resetGame();
    //     // userChoiceReset();
    //     // if (wins++){
    //     // guesses === 9;
    //     // }
    // } 
    
    if (guesses === 0){
        losses ++;
        document.querySelector("#losses-text").innerHTML =  losses;
        resetGame();
        // userChoiceReset();
    }


// // computerChoiceText.textContent = "The computer chose: " + computerGuess;
// winsText.textContent = "wins: " + wins;
// lossesText.textContent = "losses: " + losses;
// guessLeftText.textContent = "Guess left: " + guesses;
// // userChoiceText1.textContent = "You guess: " + userChoiceText;
// userChoiceText.textContent = "User Guess: " + userChoiceText.joun(", ");
// // userChoiceText.textContent = "User Guess: " + newText;

};