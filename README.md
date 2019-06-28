# Tetris
project-01


<img width="1439" alt="Screenshot 2019-06-28 at 06 41 51" src="https://user-images.githubusercontent.com/44926628/60319901-edb51d00-996f-11e9-8828-ab79d112155d.png">

### Timeframe
7 days

## Technologies used


* JavaScript (ES6)
* HTML5
* CSS
* Git/GitHub


### Introduction
The brief was to pick a game from a set list and create it in a week using Vanilla JavaScript.


## Process
_Describe the process of building the game. How did you get started? How did you manage your time? How would you do things next time?_

I built the game by setting up an array of arrays to represent my desired gameplay area. I then rendered this to the DOM. Different number values were rendered in different colours to make up the different pieces. Using an array of arrays effectively allowed me to plot X and Y co-ordinates with indexes. I used 0 to symbolise an empty space.

```
[
0: [0, 0, 0, 0, 0, 0, 0, 0, 0]
1: [0, 0, 0, 0, 0, 0, 0, 0, 0]
2: [0, 0, 0, 0, 7, 7, 0, 0, 0]
3: [0, 0, 0, 0, 0, 7, 7, 0, 0]
4: [0, 0, 0, 0, 0, 0, 0, 0, 0]
5: [0, 0, 0, 0, 0, 0, 0, 0, 0]
6: [0, 0, 0, 0, 0, 0, 0, 0, 0]
7: [0, 0, 0, 0, 0, 0, 0, 0, 0]
8: [0, 0, 0, 0, 0, 0, 0, 0, 0]
9: [0, 0, 0, 0, 0, 0, 0, 0, 0]
10:[0, 0, 0, 0, 0, 0, 0, 0, 0]
]
```

To move the pieces down the board I checked if the piece was not at the bottom of the board and checked that there was not a piece directly below it.

```
function moveShapesDown(){
  let canMove = true

  for( let y = 0; y < squareMap.length; y++) {

    for (let x=0; x<squareMap[y].length; x++) {

      if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
        if(y === squareMap.length-1 || squareMap[y+1][x] >10 ) {
          canMove = false
          freeze()
        }

      }
    }

  }
  if(canMove) {

    for(let y=squareMap.length-1;  y>=0;  y-- ){

      for (let x=0; x<squareMap[y].length; x++) {
        if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
          squareMap[y+1][x] = squareMap[y][x]
          squareMap[y][x] =0
        }
      }
    }


  }

}
```

To stop a piece if it reached the bottom of the board or came into contact with another piece I added 10 to it's value.

```
function freeze(){
  for( let y = 0; y < squareMap.length; y++) {

    for (let x=0; x<squareMap[y].length; x++) {

      if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
        squareMap[y][x] = squareMap[y][x] + 10
      }
    }
  }
  ```


### Challenges & wins
_Describe the biggest challenges.
  How did you overcome them?
  Did you decide to pivot because of time constraints?
  What did you learn from these problems?_


Challenges
  The biggest challenge was the rotation of the pieces.


Wins

For me wins were:

• Using Local Storage for the first time and being able to save peoples High Scores.

• Making it so that the more lines you cleared at once the more points you'd score.

•Making it so that with each line a player cleared the faster the blocks would fall.

•Being able to show the next block that was going to fall.


_Describe the wins.
  What are you most proud of?
  What did this project help you to understand the most?_




## Future features
In the future I'd like to make the game area bigger, add in sound effects and create a high score table as opposed to only saving a single high score.
