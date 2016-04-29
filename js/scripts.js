var winners = [
	["a1","a2","a3"],
	["b1","b2","b3"],
	["c1","c2","c3"],
	["a1","b1","c1"],
	["a2","b2","c2"],
	["a3","b3","c3"],
	["a1","b2","c3"],
	["c1","b2","a3"],
];

/*
Javascript example to set height equel to width by looping through the class array when page loads.
var squareWidth = document.getElementById("a1").clientWidth;
console.dir(squareWidth);
var squares = document.getElementsByClassName("square");
for(var i = 0; i < square.length; i++){
	squares[i].style.height = squareWidth + "px";
}
*/

var playerTurn = "X";
var playerScoreX = 0;
var playerScoreO = 0;
var players = 0;
var	emptySquares;


// ***NEED TO COMBINE FUNCTIONS TO TAKE PAREMENTER of number of players***
// ***Also make it so player cannot choose a square while it's the computer's turn.***
function play1()	{
	players = 1;
	document.getElementById("play2").style.display = "none";
}

function play2()	{
	players = 2;
	document.getElementById("play1").style.display = "none";
}


function clickMe(element)	{
	document.getElementById("errors").style.display = "none";
	if(element.innerHTML == "X" || element.innerHTML == "O")	{
		document.getElementById("errors").style.display = "block";
		return;
	}
	else	{
		element.innerHTML = playerTurn;
		element.classList.remove('empty');
		emptySquares = document.getElementsByClassName("empty");
		
	}
	if(players === 2) {
		if (playerTurn === "X") {
			playerTurn = "O";
			document.getElementById("status-turn").innerHTML = playerTurn;
		}
		else	{
			playerTurn = "X";
			document.getElementById("status-turn").innerHTML = playerTurn;
		}
	checkWin();
	if(emptySquares.length === 0)	{
			draw();
		}
	}else if(players === 1)	{
// FIX THIS SO IT CHECKS WIN BEFORE IT CALLS THE DRAW
		if(emptySquares.length === 0)	{
			draw();
		}
		else 	{
		setTimeout(computersTurn, 1000);
		}
	}
}

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

function reloadPage()	{
	for(var i = 0; i < winners.length; i++)	{
		for(var j = 0; j < winners[i].length; j++)	{
	document.getElementById(winners[i][j]).innerHTML = "";
	document.getElementById(winners[i][j]).classList.remove("winner");
	document.getElementById(winners[i][j]).classList.add('empty');
		}
	}	
	document.getElementById("errors").style.display = "none";
	document.getElementById("player-choice").style.display = "block";
	playerTurn ="X";
	document.getElementById("status-turn").innerHTML = playerTurn;
	clickOn();
}

function gameOver()	{
	var tileElements = document.getElementsByClassName('tile');
	for(var i = 0; i < tileElements.length; i++)	{
		tileElements[i].style.pointerEvents = "none";
		
	}
}

function clickOn()	{
	var tileElements = document.getElementsByClassName('tile');
	for(var i = 0; i < tileElements.length; i++)	{
			tileElements[i].style.pointerEvents = "auto";
	}
}

// Function for the computers turn
function computersTurn(){
	var emptySquares = document.getElementsByClassName("empty");
	var randomEmpty = Math.floor(Math.random() * emptySquares.length); // or Math.round(Math.random() * emptySquares.length);
	var element = emptySquares[randomEmpty];
	element.innerHTML = "O";
	element.classList.remove('empty');
	checkWin();
}

function draw()	{
	document.getElementById('errors').style.display	= "block";
	document.getElementById('errors').innerHTML	= "Draw! Hit Reset to start over!";
	gameOver();
}