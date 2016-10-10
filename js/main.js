var canvas, canvasContext;

var squareX = randomNumber();
var squareY = 0;
var squareXspeed = 3;
var start = document.getElementById("start").addEventListener("click", startGame);
var scoreBoard
var level
var canvas = document.getElementById("myCanvas");
var canvasContext = canvas.getContext("2d");
var framesPerSecond = 30;

//creates animation by updating canvas 30 times a second.
function startGame() {
  framesPerSecond;
  setInterval(updateAll, 1000/framesPerSecond);
}

function updateAll() {

drawCanvas();
drawSquare();

}

//draws canvas
function drawCanvas() {
  canvasContext.fillStyle = "black"
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

}

//draws killer square and sets speed
function drawSquare() {
  squareX += squareXspeed;
  squareY++

  if(squareX > 650) {
    squareXspeed *= -1
  }

  if(squareX < 0) {
    squareXspeed *= -1
  }

  canvasContext.fillStyle = "red"
  canvasContext.beginPath();
  canvasContext.fillRect(squareX, squareY, 50, 50)
}

//create & track score
//update level
//end game
function gameOver() {
  // if(squareY > 400) {
  //   framesPerSecond = 0;
  // }
}

//creates a random number between 1 and 650 and is plugged into squareX
function randomNumber() {
return Math.floor((Math.random() * 650) + 1);
}
