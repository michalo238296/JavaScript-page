var headerMaxLen = 15;

function displayDate()
{
	var today = new Date();
	var month = today.getMonth();
	switch(month)
	{
		case 0: 
			month = "January"
			break;
		case 1:
			month = "February"
			break;
		case 2: 
			month = "March"
			break;
		case 3:
			month = "April"
			break;
		case 4: 
			month = "May"
			break;
		case 5:
			month = "June"
			break;
		case 6: 
			month = "July"
			break;
		case 7:
			month = "August"
			break;
		case 8: 
			month = "September"
			break;
		case 9:
			month = "October"
			break;
		case 10: 
			month = "November"
			break;
		case 11:
			month = "December"
			break;
		default:
			break;
	}
	var year = today.getFullYear();
	document.getElementById("date").innerHTML = today.getDate() + " " + month + " " +
		today.getFullYear() + " | " + today.getHours() + ":" + today.getMinutes();
}

function changeTitle(string)
{
	var newTitle = string;
	var length = string.length;
	if(length > 20)
	{
		alert("The title is too long!");
		return document.getElementById("picDesc").innerHTML;
	}
	else if(length < 1)
	{
		alert("The title is too short!");
		return document.getElementById("picDesc").innerHTML;
	}
	else
	{
		console.log("The new title:" + newTitle);
		return newTitle;
	}
}

function newParagraph(strings)
{
	var i = 0;
	var newText = "";
	for(i; i < 3; i++)
		newText += strings[i].value.toUpperCase() + " ";
	return newText;
}

function changeText(pass, players, newText)
{
	console.log(pass);
	if(pass == "test")
		var i = 0;
		var len = players.length;
		while(i < len)
		{
			players[i].innerHTML = newText;
			i++;
		}
}

function hint()
{
	document.getElementById("hint").innerHTML = "Complete the field 'Championship' with the number of titles and the field 'Class of team'"
		+ "with the value of the team (5 - National team, 3 - English / German / Spanish first league team,  1 - Other team)."
		+ " Result could be either top or down"
}

function coachValue(fieldID1, fieldID2, fieldID3)
{
	//var a = document.getElementsByClassName("input")[0].value;
	//var b = document.getElementsByClassName("input")[1].value;
	//var c = a * b;
	var result = fieldID1 * fieldID2;
	document.getElementById(fieldID3).innerHTML = "Coach value: " + result;
}

function addContent(fieldID)
{
	var newText = prompt("Add your own paragraph!");
	if(newText != null)
		fieldID.innerHTML = newText;
}

function changeHeaders(fieldID, headers)
{
	headers = headers.split(",");
	var len = headers.length;
	var i = 0;
	var currString;
	for(i; i < len; i++)
	{
		currString = headers[i]
		if(currString.length < 1 || currString.length > headerMaxLen)
			continue;
		else
			document.getElementsByClassName(fieldID)[0].rows[0].cells[i].innerHTML = headers[i];
	}
}

function addPlayer(input)
{
	//var table = document.getElementsByTagName("TABLE");
	var table = document.getElementById("xd");
	var noRows = table.rows.length - 1;
	if(noRows <= 10)
	{
		var row = table.insertRow(noRows);
		row.insertCell(0).innerHTML = noRows;
		row.insertCell(1).innerHTML = input[0].value;
		row.insertCell(2).innerHTML = input[1].value;
		row.insertCell(3).innerHTML = input[2].value;
		row.insertCell(4).innerHTML = input[3].value;
	}
	else
		alert("You can't add more than 10 players!");
}

function removePlayer(noRow)
{
	var table = document.getElementById("xd");
	var end = table.rows.length - 1;
	if(noRow < end && noRow > 0)
	{
		table.deleteRow(noRow);
		var i = 1;
		for(i; i < end - 1; i++)
			table.rows[i].cells[0].innerHTML = i;
	}
	else
		alert("Invalid row number!");
}

function sumArray(table, column)
{
	var stop = table.rows.length - 1;
	var i = 1
	var sum = 0;
	for(i; i < stop; i++)
		sum = sum + Number(table.rows[i].cells[column].innerHTML);
	return sum;
}

function showModal()
{
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	span.onclick = function()
	{
		modal.style.display = "none";
	}
}

function showSummary(par)
{
	var table = document.getElementById("xd");
	var noPlayers = table.rows.length - 1;
	var i = 1;
	var maxVal = 0;
	var maxI = 1;
	for(i; i < noPlayers; i++)
	{
		if(Number(table.rows[i].cells[4].innerHTML) > maxVal)
		{
			maxVal = table.rows[i].cells[4].innerHTML;
			maxI = i;
		}
	}
	var name = document.getElementById("xd").rows[maxI].cells[1].innerHTML;
	if(noPlayers > 1 && name != "")
	{	
		par.innerHTML = "Number of players: " + (noPlayers - 1) + "<br>" + "Most valuable player: " + name +
			",&nbsp" +  + maxVal + "$" + "<br>" + "Total fee: " + document.getElementById('totalFee').innerHTML + "<br>" + "Total value: " +
			document.getElementById('totalValue').innerHTML;
	}
	else
		alert("Add some valid data first!");
}

function changeLayout(ver)
{
	if(ver == 1)
	{
		document.body.style.backgroundColor = "black";
		document.getElementsByClassName("modal-content")[0].style.backgroundColor = "black";
		document.getElementsByClassName("layoutDiv")[1].style.backgroundColor = "white";
		document.getElementsByClassName("layoutDiv")[2].style.backgroundColor = "#ACCE14";
		
		document.getElementsByTagName("H1")[0].style.color = "white";
		document.getElementsByTagName("H1")[0].style.fontFamily = "Arial";
		document.getElementsByTagName("H1")[1].style.color = "white";
		document.getElementsByTagName("H1")[1].style.fontFamily = "Arial";
		document.getElementsByTagName("CAPTION")[0].style.color = "white";
		document.getElementsByTagName("CAPTION")[0].style.fontFamily = "Arial";
		for(var i = 0; i < document.getElementsByTagName("P").length - 3; i++)
		{
			document.getElementsByTagName("P")[i].style.color = "white";
			document.getElementsByTagName("P")[i].style.fontFamily = "Arial";
		}
	}
	else if(ver == 2)
	{
		document.body.style.backgroundColor = "white";
		document.getElementsByClassName("modal-content")[0].style.backgroundColor = "white";
		document.getElementsByClassName("layoutDiv")[0].style.backgroundColor = "black";
		document.getElementsByClassName("layoutDiv")[2].style.backgroundColor = "#ACCE14";
		
		document.getElementsByTagName("H1")[0].style.color = "blue";
		document.getElementsByTagName("H1")[0].style.fontFamily = "Georgia";
		document.getElementsByTagName("H1")[1].style.color = "blue";
		document.getElementsByTagName("H1")[1].style.fontFamily = "Georgia";
		document.getElementsByTagName("CAPTION")[0].style.color = "Blue";
		document.getElementsByTagName("CAPTION")[0].style.fontFamily = "Georgia";
		for(var i = 0; i < document.getElementsByTagName("P").length - 3; i++)
		{
			document.getElementsByTagName("P")[i].style.color = "blue";
			document.getElementsByTagName("P")[i].style.fontFamily = "Georgia";
		}
	}
	else
	{
		document.body.style.backgroundColor = "#ACCE14";
		document.getElementsByClassName("modal-content")[0].style.backgroundColor = "#ACCE14";
		document.getElementsByClassName("layoutDiv")[0].style.backgroundColor = "black";
		document.getElementsByClassName("layoutDiv")[1].style.backgroundColor = "white";
		
		document.getElementsByTagName("H1")[0].style.color = "black";
		document.getElementsByTagName("H1")[1].style.color = "black";
		document.getElementsByTagName("CAPTION")[0].style.color = "black";
		for(var i = 0; i < document.getElementsByTagName("P").length - 3; i++)
			document.getElementsByTagName("P")[i].style.color = "black";
	}
}
