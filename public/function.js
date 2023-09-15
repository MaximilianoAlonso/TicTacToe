let isPlayerOne = true;
let gameOver = false;
let moves = 0;

const cells = document.querySelectorAll("h1");
const playAgain = document.querySelector(".again");
const result = document.querySelector(".result");
const totalMoves = cells.length;

cells.forEach((item) => {
  item.addEventListener("click", playerMove);
});

function playerMove(e) {
  const cellValue = e.target.innerHTML;
  if (gameOver) {
    return;
  }
  if (!cellValue.length) {
    let playerX = "X";
    let playerO = "O";

    e.target.innerHTML = isPlayerOne ? playerX : playerO;
    e.target.style.color = isPlayerOne ? "rgb(82, 255, 134)" : "rgb(255, 174, 82)";

    isPlayerOne = !isPlayerOne;

    moves++;

    checkWinner(0, 1, 2);
    checkWinner(3, 4, 5);
    checkWinner(6, 7, 8);
    checkWinner(0, 3, 6);
    checkWinner(1, 4, 7);
    checkWinner(2, 5, 8);
    checkWinner(0, 4, 8);
    checkWinner(2, 4, 6);

    if (moves === totalMoves && !gameOver) {
      twoLose();
      gameOver = true;
    }
  }
}

function checkWinner(a, b, c) {
  if (
    cells[a].innerHTML.length &&
    cells[a].innerHTML == cells[b].innerHTML &&
    cells[b].innerHTML == cells[c].innerHTML
  ) {
    showWinner(cells[a].innerHTML);
    gameOver = true;
  }
}

function showWinner(player) {
  result.innerText = "Jugador " + player + " es el ganador";
}

function twoLose() {
  result.innerText = "No hay ganador!!!";
}

playAgain.addEventListener("click", function () {
  // Reiniciar el juego
  cells.forEach((item) => {
    item.innerHTML = "";
  });
  result.innerText = "";
  isPlayerOne = true;
  gameOver = false;
  moves = 0;
});
