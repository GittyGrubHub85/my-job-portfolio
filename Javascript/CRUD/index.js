console.log("Hello World!")

//Advanced Array Structure
var recipe_list = [
{ID:"1",name: "Chicken Soup",ingredients:"chicken, water, salt, pepper, lettuce", description: "Boil water and put the chicken and other ingredients. Leave it for 10 minutes.", Price: 15.00},
{ID:"2",name: "Mango Shake",ingredients:"mango, ice, condensed milk", description: "Blend it with a shake with the following ingredients.", Price: 5.00},
{ID:"3",name: "Recipe Name 3",ingredients:"Ingredient 3", description: "Description 2.", Price: 25.00},
{ID:"4",name: "Recipe Name 4",ingredients:"Ingredient 4", description: "Description 2.", Price: 20.00},
]

category = ['Meat', 'Soup' ,'Vegetarian', 'Raw Vegan', 'Drinks', 'Dessert'];

//console.log(recipe_list[0].ID)
/*
for (i=0; i<recipe_list.length; i++){
	document.getElementById("container").innerHTML += recipe_list[i].ID + " "
	document.getElementById("container").innerHTML += recipe_list[i].name + " "
	document.getElementById("container").innerHTML += recipe_list[i].ingredients + " "  
	document.getElementById("container").innerHTML += recipe_list[i].description + "<br>"
}*/



var crudApp = new function() {
	this.createTable = function() {
		var x = document.createElement("TABLE");
		x.setAttribute("id", "myTable");
		document.body.appendChild(x);

		var arrayTR_test = []
		var td_test = []
		var td_test1
		var my_i = 0
		
		//https://stackoverflow.com/questions/40647538/get-key-and-value-of-a-javascript-array-into-variable
		recipe_list.forEach(function(item) {

			if (my_i == 0){
				arrayTR_test.push(document.createElement("TR"))
			}
	  		Object.keys(item).forEach(function(key) {
	  			if (my_i == 0){
		  			//console.log("element:" + element + " index:" + index);
			    	console.log("key:" + key + " value:" + item[key]);
			    	//my_i


				    td_test[my_i] = document.createElement("TD")
					var td_text = document.createTextNode(key);
					//console.log(recipe_list[my_i].length)
					td_test[my_i].appendChild(td_text)
					arrayTR_test[my_i].appendChild(td_test[my_i])
					return
				}
				//
	  		});
	  		my_i += 1;
	  		return
		});//*/

		my_i = 1
		
		//https://stackoverflow.com/questions/40647538/get-key-and-value-of-a-javascript-array-into-variable
		recipe_list.forEach(function(item) {
			arrayTR_test.push(document.createElement("TR"))

	  		Object.keys(item).forEach(function(key) {

	  			//console.log("element:" + element + " index:" + index);
		    	//console.log("key:" + key + " value:" + item[key]);
		    	//my_i


			    td_test[my_i] = document.createElement("TD")
				var td_text = document.createTextNode(key + ": " + item[key]);
				//console.log(recipe_list[my_i].length)
				td_test[my_i].appendChild(td_text)
				arrayTR_test[my_i].appendChild(td_test[my_i])

				//
	  		});
	  		my_i += 1;
		});//*/
		


		//arrayTR_test.push(document.createElement("TR"))
		//var tr_text = document.createTextNode("This is TR 2.");
		//arrayTR_test[1].appendChild	(tr_text)


		/*
		var tr = document.createElement("TR")
		var _t = document.createTextNode("This is TR.");
		tr.appendChild(_t)
		for (i=0; i<5; i++){
			_t = document.createTextNode("This is TR.");
			tr.appendChild(_t)
		}

		var tr1 = document.createElement("TR")
		var _t1 = document.createTextNode("This is TR.");
		tr1.appendChild(_t1)
		for (i=0; i<5; i++){
			_t1 = document.createTextNode("This is TR.");
			tr1.appendChild(_t1)
		}*/

		for(i=0;i<arrayTR_test.length;i++){
			x.appendChild(arrayTR_test[i]);
		}

		
		//x.appendChild(arrayTR_test[1]);
		//x.appendChild(tr1);

		/*
	  var y = document.createElement("TR");
	  y.setAttribute("id", "myTr");
	  document.getElementById("myTable").appendChild(y);

	  var z = document.createElement("TD");
	  var t = document.createTextNode("cell");
	  z.appendChild(t);
	  document.getElementById("myTr").appendChild(z);*/
	};
}

crudApp.createTable()

/*
for (const [key,value] of Object.entries(flatten)) {
    //console.log( `${key}: ${value}` ); //This is probably meant as what to add in there.
    console.log( `${flatten[key].key}: ${flatten[key].value}` );
}


/*
//This one works for me.
obj = {
	"id":1, 
	"name": "Chicken Soup",
	"ingredients":"Chicken, water, salt, pepper, lettuce", 
	"description": "Boil water and put the chicken and other ingredients. Leave it for 10 minutes."

} //Object Sample



//obj = {"a":1, "b":2, "c":3} //Object Sample

console.log("ID: " + obj.id) //I can use this function to simply print out directly on the console. I don't have to rush for innerHTML if it takes too much time.
console.log("NAME: " + obj.name)
console.log("INGREDIENTS: " + obj.ingredients)
console.log("DESCRIPTION: " + obj.description)
console.log(Object.keys(obj))

//method 1 (to get the index of obj's keys)
console.log("I can get the key of obj[0]: " + Object.keys(obj)[0])
//method 2 (to get the index of obj's keys)
test = Object.keys(obj)
console.log("I can get the key of obj[0]: " + test[0])
console.log("\n")

var table = document.createElement("table")
table.setAttribute('id', 'booksTable');     // Set table id.

var tr = table.insertRow(-1)

for (i=0; i<1; i++){
	var th = document.createElement("th")
	th.innerHTML = "test"
}

//document.getElementById("container").innerHTML = table

var div = document.getElementById('container');
div.innerHTML = '';
div.appendChild(table);    // ADD THE TABLE TO THE WEB PAGE.

//document.getElementById('container').innerHTML = "AWJD)(AW"


document.body.onload = addTableElement;

function addTableElement () {
  // create a new div element
  const newDiv = document.createElement("table");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings! HE");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  //newDiv.appendChild("<tr><th>Hello</th></tr>");

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("container");
  document.body.insertBefore(newDiv, currentDiv);
}




function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("container");
  document.body.insertBefore(newDiv, currentDiv);
}


/*

// CREATE A TABLE.
var table = document.createElement('table');
table.setAttribute('id', 'booksTable');     // Seet table id.

var tr = table.insertRow(-1);               // Create a row (for header).

for (var h = 0; h < this.col.length; h++) {
    // Add table header.
    var th = document.createElement('th');
    th.innerHTML = this.col[h].replace('_', ' ');
    tr.appendChild(th);
}

//Advanced Array Structure
var flatten = [
{"key":"a","value":1},
{"key":"b","value":2},
{"key":"c","value":3}
]

for (const [key,value] of Object.entries(flatten)) {
    //console.log( `${key}: ${value}` ); //This is probably meant as what to add in there.
    console.log( `${flatten[key].key}: ${flatten[key].value}` );
}
for (i=0;i<5;i++){ // I can still do regular for loop as I would do in C++, Java, and C#
	console.log("HELLO!")
}

//
function Flatten(){
	document.getElementById("test").innerHTML = "Flatten array value shown here: " + flatten[0].key + " and " + flatten[0].value
}//*/
