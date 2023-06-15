var score = 0;
var timeLeft = 5;
var timer;

function eatCookie() {
  score++;
  document.getElementById("score").innerHTML = "Score: " + score;
}

function countDown() {
  document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + " seconds";
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById("cookieButton").disabled = true;
    alert("Game over! Your score is " + score);
  }
}

function startGame() {
  timer = setInterval(countDown, 1000);
  document.getElementById("cookieButton").disabled = false;
  document.getElementById("cookieButton").focus();
  score = 0;
  timeLeft = 5;
  document.getElementById("score").innerHTML = "Score: 0";
  document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + " seconds";
}

startGame();
