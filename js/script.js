"use strict";

/* 
console.log(document.querySelector(".message"));
document.querySelector(".message").textContent = "🎉🎉 correct🥳";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 24) + 1;
let currentScore = 24;
let highscore = 0;

// function is to reset the value
const resetValue = function (selector, value) {
  document.querySelector(selector).textContent = value;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    resetValue(".message", "⛔⛔ no number");
    // when player wins the game
  } else if (guess === secretNumber) {
    resetValue(".message", "🎉🎉 correct🥳");
    resetValue(".number", secretNumber);
    // changing the background color when player wins
    document.querySelector("body").style.backgroundColor = "#66DE93";
    // changing the width of number when player wins
    document.querySelector(".number").style.width = "30rem";

    // implement high score
    if (currentScore > highscore) {
      highscore = currentScore;
      resetValue(".highscore", highscore);
    }

    // when guess not equals secretNumber
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      resetValue(
        ".message",
        guess > secretNumber ? "📈📈 too high🤔" : "📉📉 too low🤔"
      );
      currentScore--;
      resetValue(".score", currentScore);
    } else {
      resetValue(".message", "🎆🎆 you lost");
      resetValue(".score", 0);
      document.querySelector("body").style.backgroundColor = "#DA0037";
    }
  }
});

// functionality of 'again!!' button
//    1. restore initial values of currentScore and secretNumber variables
//    2. restore the initial conditions of message, score and number
//        guess input field
//    3. restore the background-color of the body

document.querySelector(".again").addEventListener("click", function () {
  // reset current score
  currentScore = 24;
  // reset secret random number
  secretNumber = Math.trunc(Math.random() * 24) + 1;

  // reset the initial conditon of message
  resetValue(".message", "start guessing...");
  // reset the score
  resetValue(".score", currentScore);
  // reset the number
  resetValue(".number", "?");
  // reset the input field
  document.querySelector(".guess").value = "";

  // reset background-color
  document.querySelector("body").style.backgroundColor = "#222";
  // reset width of number
  document.querySelector(".number").style.width = "15rem";
});
