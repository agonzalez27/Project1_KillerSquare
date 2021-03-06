#KILLER SQUARE (TIE Fighter Defense)
###Wire Frame
![Killer Square](https://github.com/agonzalez27/Project1_KillerSquare/blob/master/ReadMe/KillerSquare2.png?raw=true "Killer Square")
###User Stories
[Project 1 User Stories](https://trello.com/b/S3EOgjUR/project-1)
###Minimum Viable Product
Killer Square begins with a board that displays a red square at the top.  At the bottom, there are three boxes displaying a score board, a start button, and a level indicator.  When the player clicks the start button, the red square will begin to move from the top of the board towards the bottom of the board.  If the user can click on the Killer Square before it reaches the bottom of the board, the game will re-load and move into level two.  In level two, the Killer Square will appear in a random position on the top of the board and will move to the bottom of the board more quickly than in level one.  With every subsequent level, the speed of the Killer Square will increase.  If the user cannot click on the Killer Square before it reaches the bottom of the board, the game will end.   

###Stretch Goals
If I can finish the minimum viable product by Wednesday 10/12, I will work on increasing the game's complexity and style.  The first step will be to give the game a Star Wars theme where the Killer Box will be replaced with a TIE Fighter.  The board's background will have a space gif which will simulate space flight.  

If I have more time to make improvements, I will work on giving the TIE Fighter increasingly complex movement patterns across the board.     
  
###Technologies Used
To render and style the game board, I used HTML5 and CSS.

To move the Killer Square, track score, track level, and track highest score, used Javascript, jQuery, and HTML5 Canvas.    

###Approach Taken
I began by first creating a skeleton of what I ultimately wanted to accomplish which was a Star Wars themed TIE Fighter game.  Once the skeleton was completed, I replaced the killer square with a TIE Fighter.  I replaced the body background with a star wars image.  Mike recommended that I add a high score board which tracked the score of every subsequent game.  I also added music.   

###Installation Instructions
Visit https://github.com/agonzalez27/Project1_KillerSquare and clone the repo.  Open the index.html file in your favorite browser (Chrome highly recommended).  

###Unsolved Problems
I was able to create a starry background on canvas using three for loops.  Ideally, the stars would move during game play to simulate space flight.  

I didn't quite have enough time to create lasers and and a shooting sound every time the mouse was clicked.  

###Known Bugs
There are currently no known bugs.  

###Future Goals
I want to simulate space flight.  Perhaps I can layer two canvasses on top of one another.  I could also perhaps attach event listeners to the stars which will help me move them from side to side and up and down.  