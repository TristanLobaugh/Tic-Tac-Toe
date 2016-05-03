# Tic Tac Toe

### The classic Tic Tac Toe game using CSS, HTML, native javascript and jQuery

## Summary

#### Tic Tac Toe laid out using CSS. Player can choose to play by himself with a computer oppentent that will choose a random location for their move. The player can also choose two player. The game will keep score and recognizes winning combinations on the board by compairng an array of winning combination versus what is on the current board.

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Demo

[Live Demo](http://tristanlobaugh.com/tic_tac_toe)

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/tic_tac_toe/master/img/screen_shot.png)

### During a game:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/tic_tac_toe/master/img/screen_shot2.png)


##Code Examples

### Code of function checking for winning conditons and then calling the gameOver function
```
function checkWin()	{
	for(var i = 0; i < winners.length; i++)	{
		if((document.getElementById(winners[i][0]).innerHTML) == "X" && (document.getElementById(winners[i][1]).innerHTML == "X") && (document.getElementById(winners[i][2]).innerHTML == "X"))	{
			document.getElementById('errors').style.display	= "block";
			document.getElementById('errors').innerHTML	= "Player X is the winner!";
			document.getElementById(winners[i][0]).classList.add("winner");
			document.getElementById(winners[i][1]).classList.add("winner");
			document.getElementById(winners[i][2]).classList.add("winner");
			playerScoreX++;
			document.getElementById("x-score").innerHTML = playerScoreX;
			gameOver();
			break;
		}
		else if((document.getElementById(winners[i][0]).innerHTML) == "O" && (document.getElementById(winners[i][1]).innerHTML == "O") && (document.getElementById(winners[i][2]).innerHTML == "O"))	{
			document.getElementById('errors').style.display	= "block";
			document.getElementById('errors').innerHTML	= "Player O is the winner!";
			document.getElementById(winners[i][0]).classList.add("winner");
			document.getElementById(winners[i][1]).classList.add("winner");
			document.getElementById(winners[i][2]).classList.add("winner");
			playerScoreO++;
			document.getElementById("o-score").innerHTML = playerScoreO;
			gameOver();
			break;
		}
	}
}
```

### Function for the computers turn
```
// Function for the computers turn
function computersTurn(){
	var emptySquares = document.getElementsByClassName("empty");
	var randomEmpty = Math.floor(Math.random() * emptySquares.length); // or Math.round(Math.random() * emptySquares.length);
	var element = emptySquares[randomEmpty];
	element.innerHTML = "O";
	element.classList.remove('empty');
	checkWin();
}
```

## To Do
Minor end game bug fixes