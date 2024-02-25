// javascript code goes here
const grid = document.getElementById("grid");
const squares = document.querySelectorAll(".square");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const scoreDisplay = document.getElementById("score");
const timeLeftDisplay = document.getElementById("time-left");

let molePosition;
let score = 0;
let timeLeft = 10;
let timerId;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  const randomIndex = Math.floor(Math.random() * squares.length);
  squares[randomIndex].classList.add("mole");
  molePosition = randomIndex;
}

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

function startGame() {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = `Score: ${score}`;
  timeLeftDisplay.textContent = `Time Left: ${timeLeft}`;
  moveMole();
  setTimeout(() => {
    clearInterval(timerId);
    alert(`Game Over! Your final score is ${score}`);
  }, timeLeft * 1000);
}

function resetGame() {
  clearInterval(timerId);
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = `Score: ${score}`;
  timeLeftDisplay.textContent = `Time Left: ${timeLeft}`;
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
}

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.classList.contains("mole")) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      square.classList.remove("mole");
    }
  });
});

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
