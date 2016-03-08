var playerTurn = "X";

function clickMe(elementId)	{
	document.getElementById("errors").style.display = "none";
	if(elementId.innerHTML == "X" || elementId.innerHTML == "O")	{
		document.getElementById("errors").style.display = "block";
		return;
	}
	else	{
		elementId.innerHTML = playerTurn;
	}

	if (playerTurn === "X") {
		playerTurn = "O";
		document.getElementById("status-turn").innerHTML = playerTurn;
	}
	else	{
		playerTurn = "X";
		document.getElementById("status-turn").innerHTML = playerTurn;
	}
}













