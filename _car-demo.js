// Create the name space
var MYAPP = {
    /* property contains data */
    carOwner	: "Michael\'s",

//    Methods - becuase it is a function
    init: function() {
        var michaelsCar = new MYAPP.Car($("#other"));
        var davidsCar = new MYAPP.Car($("#second-other"));

        michaelsCar.setColour("green");
        console.log("Michael's car has the color " + michaelsCar.colour);

        var davidsFullName = new MYAPP.FullName();
        davidsFullName.setfullName("David","knowles");

        $("#whatever").html(davidsFullName.firstName + " " + davidsFullName.lastName + " is driving " + this.carOwner + " " + michaelsCar.colour + " car!");

    },

    Car: function(div) {

        // Prporties
        var el = div,

        // Private methods

            moveCar = function(){
                el.css({
                    "left","200px";
                    "position","relative"
                });
            };

        // Public Methods

        this.setColour = function (colour){
            el.css("background-color", colour)
            this.colour = colour;
        };


        // when we create an instance of Car this get exicuted
        var init = (function(){
            console.log("init");
            el.bind("click", function(){
                console.log("click");
                moveCar();
            });
        })();




    },

    FullName: function() {
        this.setfullName = function (firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
};

MYAPP.init();
