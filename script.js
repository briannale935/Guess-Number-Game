// Declaring the secrect number
let myNumber = Math.floor(Math.random() * 20) + 1;
console.log(myNumber);

// Game logic
document.getElementById("check-button").addEventListener("click", function () {
  //userGuess, guessRemaining, and highschore elements
  const userGuess = Number(document.getElementById("guess-box").value);
  console.log(userGuess);

  let guessRemaining = document.getElementById("guess-remaining").textContent;
  guessRemaining = parseInt(guessRemaining.replace("Guesses Remaining: ", ""));

  let highscore = document.getElementById("highscore").textContent;
  highscore = parseInt(highscore.replace("Highscore: ", ""));
  console.log(highscore);

  // Conditional logic to verify user's guess and provide hints
  if (userGuess == 0) {
    document.getElementById("hint").textContent = "Enter a Valid Guess!";
  } else if (userGuess == myNumber) {
    document.getElementById("hint").textContent = "Correct!";
    document.getElementById("question-mark").textContent = myNumber;
    document.querySelector("body").style.backgroundColor = "#3CB371";
    if (guessRemaining > highscore) highscore = guessRemaining;
    document.getElementById(
      "highscore"
    ).textContent = `Highscore: ${highscore}`;
  } else if (userGuess > myNumber) {
    document.getElementById("hint").textContent = "⬇Guess Lower!";
    guessRemaining -= 1;
    console.log(guessRemaining);
    document.getElementById(
      "guess-remaining"
    ).textContent = `Guesses Remaining: ${guessRemaining}`;
  } else if (userGuess < myNumber) {
    document.getElementById("hint").textContent = "⬆Guess Higher!";
    guessRemaining -= 1;
    console.log(guessRemaining);
    document.getElementById(
      "guess-remaining"
    ).textContent = `Guesses Remaining: ${guessRemaining}`;
  }

  // Game over message for when no guesses remain
  if (guessRemaining <= 0) {
    document.getElementById("hint").textContent = "Game Over!";
    endGame();
  }
});

// Function to end game
function endGame() {
  guessRemaining = 0;
  document.getElementById("hint").textContent = "Game Over!";
  document.getElementById(
    "guess-remaining"
  ).textContent = `Guesses Remaining: ${guessRemaining}`;
  document.querySelector("body").style.backgroundColor = "#CC0000";
}

// Function to play the game again while retaining highscore information from previous attempt
document.getElementById("play-button").addEventListener("click", function () {
  myNumber = Math.floor(Math.random() * 20) + 1;
  console.log(myNumber);
  guessRemaining = 20;
  document.querySelector("body").style.backgroundColor = "#5f9ea0";
  document.getElementById("hint").textContent = "Hint...";
  document.getElementById("question-mark").textContent = "?";
  document.getElementById(
    "guess-remaining"
  ).textContent = `Guesses Remaining: ${guessRemaining}`;
  document.getElementById("guess-box").value = "";
});
