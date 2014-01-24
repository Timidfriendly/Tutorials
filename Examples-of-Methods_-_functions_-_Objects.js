
// Object literal (just one)
// defined object and defined method called hello
// Not usable across multiple files
var abc = {
    hello: function(){
        console.log("hello")
    },
    goodbye: function(){ return "fish"}
};
abc.hello();


// Object definition
var Cde = function(){
    this.hello = function(){
        console.log("hello")
    }
};

var myInstance = new Cde();

myInstance.hello();


// Function definition
var efg = function(){
    return "hello";
};

console.log(efg());



// defined object and defined method called hello
var hij = {
    goodbye: function(){ return "fish"}
};

// extending initial object by adding methods to it
hij.hello = function(){  console.log("hello")};
// this is also the way to overide methods and values