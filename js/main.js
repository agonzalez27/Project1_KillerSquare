var canvas, canvasContext;

var squareX = randomNumber();
var squareY = 0;
var squareXspeed = 3;
var squareYspeed = 1;
var clickX;
var clickY;
var start = $("#start").on("click", startGame);
var score = 0;
var canvas = $("#myCanvas");
var canvasContext = canvas[0].getContext("2d");
var level = 1;
var titleDiv = $("#titleDiv");
var footerDiv = $("#footerDiv");
var startDiv = $("#startDiv");
var highScoreDiv = $("#highScoreDiv");
var highScore = [0];
var interval;
var audioIntro = new Audio("./Assets/MainStarWars.mp3")
audioIntro.play();
var audioPlay = new Audio("./Assets/ImperialAttack.mp3")
var blaster = new Audio("./Assets/blaster.mp3")
var laserCounter = 0

//this is the event listner for the shooting clicks on the page
canvas.on("click", function(e) {
  clickX = e.pageX - canvas[0].offsetLeft
  clickY = e.pageY - canvas[0].offsetTop
  laserCounter = 6
  if(clickX >= squareX && clickX <= squareX+100 && clickY >= squareY && clickY <= squareY+100) {
    score = score + 50;
    $("#score").html("Score: " + score);
    level = level +1;
    $("#level").html("Level: " + level);
    squareX = randomNumber();
    squareY = 0;
    squareXspeed = squareXspeed *1.5;
    squareYspeed = squareYspeed *1.2;
  }
    blaster.play();
})

//creates animation by updating canvas 30 times a second.
function startGame() {
  interval = setInterval(updateAll, 30);
  $("#start").off();
  audioIntro.pause();
  audioPlay.play();
}

//calls functions that draw various elements and ends game when TIE figher hits the botom of the page
function updateAll() {
  drawCanvas();
  drawStars();
  drawSquare();
  if(squareY > 450) {
    clearInterval(interval);
    titleDiv.html("GAME OVER");
    startDiv.html('<button id="RESTART">RESTART</button>');
    $('#RESTART').on("click", restartGame);
    highScore.push(score);
    var j = highScore.length - 1;
    highScore1(j);
  }
  fireLaser1();
  fireLaser2();
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


//creates a random number between 1 and 650 and is plugged into squareX
function randomNumber() {
  return Math.floor((Math.random() * 620) + 1);
}

//star random position on the x-axis
starsX = [];

function makeStarsX() {
  for(var i = 0; i < 200; i++) {
    starsX.push(Math.floor((Math.random() * 700) + 1));
  }
}

makeStarsX();

//star random position on the y-axis
starsY = [];

function makeStarsY() {
  for(var i = 0; i < 200; i++) {
    starsY.push(Math.floor((Math.random() * 500) + 1));
  }
}

makeStarsY();

//draw 200 randomly placed stars
function drawStars() {
  for(var i = 1; i < 200; i++) {
    canvasContext.beginPath();
    canvasContext.arc(starsX[i], starsY[i], 1, 0, 2*Math.PI);
    canvasContext.fillStyle = "white";
    canvasContext.fill();
  }
}

//prints high score in to high score div
function highScore1(j) {
  return $('#highScoreUl').append("<li>Game: " + j + "  " + "Level: " + level + "  " + "Score: " + highScore[j] + "</li>");
}

function restartGame() {
  score = 0;
  level = 1;
  squareY = 0;
  squareX = randomNumber();
  squareXspeed = 3;
  squareYspeed = 1;
  titleDiv.html('<img id="titleDivTitle" src="Assets/tFighterD.png">');
  $('#RESTART').off();
  startGame();
}

function fireLaser1() {
  canvasContext.beginPath();
  canvasContext.moveTo(0, 500);
  canvasContext.lineTo(clickX, clickY);
  canvasContext.strokeStyle = "rgba(0,0,255,."+laserCounter+")";
  canvasContext.lineWidth = 5;
  canvasContext.stroke();
  laserCounter--
}

function fireLaser2() {
  canvasContext.beginPath();
  canvasContext.moveTo(700, 500);
  canvasContext.lineTo(clickX, clickY);
  canvasContext.strokeStyle = "rgba(0,0,255,."+laserCounter+")";
  canvasContext.lineWidth = 5;
  canvasContext.stroke();
}
