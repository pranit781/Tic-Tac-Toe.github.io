var currentPlayer = "X";
var gameActive = true;
var gameState = ["", "", "", "", "", "", "", "", ""];

var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cellIndex) {
  if (gameState[cellIndex] === "" && gameActive) {
    gameState[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;

    if (checkWin()) {
      document.getElementById("board").classList.add("game-over");
      document.getElementById("board").classList.add(currentPlayer === "X" ? "x-wins" : "o-wins");
      gameActive = false;
    } else if (checkDraw()) {
      document.getElementById("board").classList.add("game-over");
      document.getElementById("board").classList.add("draw");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (
      gameState[a] !== "" &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !gameState.includes
}

function resetGame() {
    currentPlayer = "X";
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("board").classList.remove("game-over");
    document.getElementById("board").classList.remove("x-wins");
    document.getElementById("board").classList.remove("o-wins");
    document.getElementById("board").classList.remove("draw");
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
    }
  }