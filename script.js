var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

var answer = Math.floor(Math.random()*100) + 1;
var guesses_count = 0;
var previous_numbers = [];

function guess_start(){
var player_guess = document.getElementById("guess").value;
if (player_guess < 1 || player_guess > 100) {
    alert("Please select a number between 1 and 100");
}
else{
    previous_numbers.push(player_guess);
    guesses_count+= 1;

    if (player_guess < answer) {
        text1.textContent = "Your guess is too low";
        text2.textContent = "Number of guesses: " + guesses_count;
        text3.textContent = "Previous guesses: " + previous_numbers;
    }
    else if (player_guess > answer) {
        text1.textContent = "Your guess is too high";
        text2.textContent = "Number of guesses: " + guesses_count;
        text3.textContent = "Previous guesses: " + previous_numbers;
    }
    else if (player_guess == answer) {
        text1.textContent = "Yay! You win!"
        text2.textContent = "The number was: " + answer +". You guessed it in " + guesses_count + " guesses!";
        text3.textContent = "Previous guesses: " + previous_numbers;
    }
    }
}
