// Create the name space
var MYAPP = {
		space : " "
};


MYAPP.init = function() {
	var michaelsCar = new MYAPP.Car(),
		davesCar = new MYAPP.Car();
		michaelsFullName = new MYAPP.Person();
	michaelsCar.setColor("red");
	davesCar.setColor("green");
	michaelsFullName.setFirstName("Michael");
	michaelsFullName.setLastName("Cassidy");
	console.log("David's car has the " + davesCar.color +  "color.");
	console.log("Michael's car has the color " + michaelsCar.color);
	console.log("Michaels full name is " + "\'" + michaelsFullName.firstName + " " + michaelsFullName.lastName + "\'");
	//console.log(michaelsFullName.firstName + " " + michaelsFullName.lastName + " " + "Drives a" + " " + michaelsCar.color + " colored car.");
		console.log(michaelsFullName.firstName + this.space + michaelsFullName.lastName + this.space + "Drives a" + this.space + michaelsCar.color + " colored car.");

	//console.log(fullName.firstName + " " + fullName.lastName + "Drives a " + " " + michaelsCar.color + " colored car.");


	
};

MYAPP.Car = function() {
	this.setColor = function (color){
	this.color = color;
	};
};


MYAPP.Person = function() {
	this.setFirstName = function (firstName){
		this.firstName = firstName;
	};
	this.setLastName = function (lastName) {
		this.lastName = lastName;
	};
};




// MYAPP.Person = function() {
// 	this.fullName = function (firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	};
// };


MYAPP.init();
