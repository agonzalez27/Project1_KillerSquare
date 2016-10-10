var canvas, canvasContext;

var squareX = randomNumber();
var squareY = 0;
var squareXspeed = 3;
var start = $("#start").on("click", startGame);
var scoreBoard
var level
var canvas = $("#myCanvas");
var canvasContext = canvas[0].getContext("2d");

canvas.on("click", function(e) {
  var clickX = e.pageX - canvas[0].offsetLeft
  var clickY = e.pageY - canvas[0].offsetTop
  console.log('clickX:', clickX)
  console.log('squareX:', squareX)
  if(clickX >= squareX && clickX <= squareX+50) {
    console.log("x coordinate works")
  }
  console.log('clickY:', clickY)
  console.log('squareY:', squareY)
  // if(e.pageX && x.pageY) {
  //   console.log("you just got 10 points")
  // }
})

//creates animation by updating canvas 30 times a second.
function startGame() {
  setInterval(updateAll, 30);
}

function updateAll() {

  drawCanvas();
  drawSquare();

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

  canvasContext.fillStyle = "red"
  canvasContext.beginPath();
  canvasContext.fillRect(squareX, squareY, 50, 50)
}

//create & track score
//update level
//end game
// function gameOver() {
//   if(squareY > 400) {
//   clearInterval(startGame);
//  }
// }

//creates a random number between 1 and 650 and is plugged into squareX
function randomNumber() {
return Math.floor((Math.random() * 650) + 1);
}
