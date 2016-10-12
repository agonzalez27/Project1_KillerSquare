var canvas, canvasContext;

var squareX = randomNumber();
var squareY = 0;
var squareXspeed = 3;
var squareYspeed = 1;
var clickX;
var clickY;
var laserX = 350;
var laserY = 500;
var laserXspeed = 3;
var laserYspeed = 1;
var start = $("#start").on("click", startGame);
var score = 0;
var canvas = $("#myCanvas");
var canvasContext = canvas[0].getContext("2d");
var level = 1;
var titleDiv = $("#titleDiv");
var footerDiv = $("#footerDiv");
var highScoreDiv = $("#highScoreDiv");
var highScore = [0];

canvas.on("click", function(e) {
  clickX = e.pageX - canvas[0].offsetLeft
  clickY = e.pageY - canvas[0].offsetTop
  if(clickX >= squareX && clickX <= squareX+100 && clickY >= squareY && clickY <= squareY+100) {
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
    squareYspeed = squareYspeed *1.2;
  }

})

var interval;

//creates animation by updating canvas 30 times a second.
function startGame() {
    interval = setInterval(updateAll, 30);
    $("#start").off();
}

function updateAll() {
  drawCanvas();
  drawStars();
  drawSquare();
  if(squareY > 450) {
    clearInterval(interval);
    titleDiv.html("GAME OVER");
    footerDiv.html("RESTART")
    highScore.push(score);
    canvas.off();
    console.log('about to call high score 1');
    highScore1();
  }
  // // win logic
  // else {
  // // //   if(score == 450) {
  // // //     clearInterval(interval);
  // // //     $("#titleDiv").html("You Win!");
  // // //     canvas.off();
  // // //   }
  // // }
  // drawLaser();
}

//draws canvas
function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas[0].width, canvas[0].height);
}

//draws tie fighter and sets speed
function drawSquare() {
  squareX += squareXspeed;
  squareY += squareYspeed;

  if(squareX > 620) {
    squareXspeed *= -1
  }

  if(squareX < 0) {
    squareXspeed *= -1
  }

var tie = new Image();
tie.src = "Assets/TieFighterEdited.png";
canvasContext.drawImage(tie, squareX, squareY, 100, 100);
}

// function drawLaser() {
//   laserX += laserXspeed;
//   laserY += laserYspeed;
//
//   // if(squareX > 620) {
//   //   squareXspeed *= -1
//   // }
//   //
//   // if(squareX < 0) {
//   //   squareXspeed *= -1
//   // }
//
//   canvasContext.beginPath();
//   canvasContext.fillRect(laserX, laserY, 25, 100)
//   canvasContext.fillStyle = "red";
//
//
// }

//creates a random number between 1 and 650 and is plugged into squareX
function randomNumber() {
  return Math.floor((Math.random() * 620) + 1);
}

starsX = [];

function makeStarsX() {
  for(var i = 0; i < 200; i++) {
    starsX.push(Math.floor((Math.random() * 700) + 1));
  }
}

makeStarsX();

starsY = [];

function makeStarsY() {
  for(var i = 0; i < 200; i++) {
    starsY.push(Math.floor((Math.random() * 500) + 1));
  }
}

makeStarsY();

function drawStars() {
  for(var i = 1; i < 200; i++) {
    canvasContext.beginPath();
    canvasContext.arc(starsX[i], starsY[i], 1, 0, 2*Math.PI);
    canvasContext.fillStyle = "white";
    canvasContext.fill();
  }
}

function highScore1() {
  for(var i = 1; i < highScore.length; i++) {
     $('#highScoreUl').append("<li>Game " + i + " " + "Score " + highScore[i] + "</li>");
  }
  console.log(highScore)
}
