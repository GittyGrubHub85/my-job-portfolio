let myList = [] //Basic array



//Generating numbers
var temp = ""
for(i=0;i<15;i++){
	temp = ""
	for(n=0;n<4;n++){
		temp += getRandomInt(0, 9)
	}
	myList.push( temp )
}
//adding an inner HTML when the browser starts.
for(i=0; i<myList.length; i++){
	document.getElementById("test1").innerHTML += "<li>" + myList[i] + "</li>"
}


function my_input(){
	if (document.getElementById("textareaID").value == "") {//If there's no Input of Add Index
		return//prevents the code from adding its array index with nothing or whitespace ("")
	}

	// append new value to the array
	myList.push( document.getElementById("textareaID").value );
	//console.log(myList)

	document.getElementById("test1").innerHTML = ""
	for(i=0; i<myList.length; i++){
		document.getElementById("test1").innerHTML += "<li>" + myList[i] + "</li>"
	}//I didn't add an else statement because it doesn't need it.
	
}

//This is the function that the textarea add index is using in order to let me input a keyboard enter so I don't have to use my cursor all the time.
function handle(e){
    if(e.keyCode === 13){
        //e.preventDefault(); // Ensure it is only this code that runs
        my_input()
        //alert("Enter was pressed was presses");
    }
}


function search_function() {
	var a, txtValue, input;
	input = document.getElementById("searchInput")
	filter = input.value.toUpperCase();

	document.getElementById("test1").innerHTML = ""

	for (i = 0; i < myList.length; i++) {
		a = myList[i]
		
		txtValue = a.textContent || a.innerText;
	    if (a.toUpperCase().indexOf(filter) > -1) {
	      document.getElementById("test1").innerHTML += "<li>" + myList[i] + "</li>"
	    }
	}
}

function getRandomInt(min, max) {
	//Math.random().toString(36).slice(2)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}