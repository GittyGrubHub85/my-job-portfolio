let selectedColors = [] //Basic array
//console.log(selectedColors)
//console.log(selectedColors[0])
//console.log("\n")


//Generating numbers
var temp = ""
for(i=0;i<15;i++){
	temp = ""
	for(n=0;n<4;n++){
		temp += getRandomInt(0, 9)
	}
	selectedColors.push( temp )
}
//adding an inner HTML 
for(i=0; i<selectedColors.length; i++){
	document.getElementById("test1").innerHTML += "<li>" + selectedColors[i] + "</li>"
}

function my_input(){
	if (document.getElementById("textareaID").value == "") {//If there's mo Input of Add Index
		return//prevents the code from adding nothing
	}

	// append new value to the array
	selectedColors.push( document.getElementById("textareaID").value );
	console.log(selectedColors)

	document.getElementById("test1").innerHTML = ""
	for(i=0; i<selectedColors.length; i++){
		document.getElementById("test1").innerHTML += "<li>" + selectedColors[i] + "</li>"
	}
	
}


function search_function() {
	var a, txtValue, input;
	input = document.getElementById("searchInput")
	filter = input.value.toUpperCase();

	document.getElementById("test1").innerHTML = ""

	for (i = 0; i < selectedColors.length; i++) {
		a = selectedColors[i]
		
		txtValue = a.textContent || a.innerText;
	    if (a.toUpperCase().indexOf(filter) > -1) {
	      document.getElementById("test1").innerHTML += "<li>" + selectedColors[i] + "</li>"
	    }
	}
}

function getRandomInt(min, max) {
	//Math.random().toString(36).slice(2)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}