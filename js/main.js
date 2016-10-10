var canvas, canvasContext;

var squareX = randomNumber();
var squareY = 0;
var squareXspeed = 3;
var start = $("#start").on("click", startGame);
var score = 0;
var canvas = $("#myCanvas");
var canvasContext = canvas[0].getContext("2d");
var level = 1;

canvas.on("click", function(e) {
  var clickX = e.pageX - canvas[0].offsetLeft
  var clickY = e.pageY - canvas[0].offsetTop
  if(clickX >= squareX && clickX <= squareX+50 && clickY >= squareY && clickY <= squareY+50) {
    console.log("You scored 50 points");
    score = score + 50;
    console.log(score);
    $("#score").html("Score: " + score);
    level = level +1;
    $("#level").html("Level: " + level);
    console.log(level)
    squareX = randomNumber();
    squareY = squareY = 0;
    squareXspeed = squareXspeed *1.5;
  }
})




var interval;

//creates animation by updating canvas 30 times a second.
function startGame() {
    interval = setInterval(updateAll, 30);

}

function updateAll() {

  drawCanvas();
  drawSquare();
  if(squareY > 450) {
    clearInterval(interval);
    alert("Game Over")
  }
}

//draws canvas
function drawCanvas() {
  canvasContext.fillStyle = "black"
  canvasContext.fillRect(0, 0, canvas[0].width, canvas[0].height);
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

  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.fillRect(squareX, squareY, 50, 50)
}

//creates a random number between 1 and 650 and is plugged into squareX
function randomNumber() {
return Math.floor((Math.random() * 650) + 1);
}
