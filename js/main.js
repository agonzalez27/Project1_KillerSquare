var canvas, canvasContext;

var squareX = randomNumber();
var squareY = 0;
var squareXspeed = 3;
var start = document.getElementById("start").addEventListener("click", startGame)

function startGame() {
  canvas = document.getElementById("myCanvas");
  canvasContext = canvas.getContext("2d");

  var framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);
}

function updateAll() {
  squareX += squareXspeed;
  squareY++

  if(squareX > 650) {
    squareXspeed *= -1
  }

  if(squareX < 0) {
    squareXspeed *= -1
  }

  canvasContext.fillStyle = "black"
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  canvasContext.fillStyle = "red"
  canvasContext.beginPath();
  canvasContext.fillRect(squareX, squareY, 50, 50)
}

//creates a random number between 1 and 650 and is plugged into squareX
function randomNumber() {
return Math.floor((Math.random() * 650) + 1);
}
