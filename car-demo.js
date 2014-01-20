// Create the name space
var MYAPP = {
    /* property contains data */
    carOwner	: "Michael\'s",

//    Methods - becuase it is a function
    init: function() {
        var michaelsCar = new MYAPP.Car($("#other"), "pink", 39);
        var davidsCar = new MYAPP.Car($("#second-other"), "blue", 68);

        michaelsCar.setColour("green");
        console.log("Michael's car has the color " + michaelsCar.colour);

        var davidsFullName = new MYAPP.FullName();
        davidsFullName.setfullName("David","knowles");

        $("#whatever").html(davidsFullName.firstName + " " + davidsFullName.lastName + " is driving " + this.carOwner + " " + michaelsCar.colour + " car!");

    },

    Car: function(div, colour, myKeyToPress) {

        // Proporties
        var el = div,
//            carLeftPos = 0,
//            amountOfMovement = 20, //px

        // Private methods
            moveCar = function(){
//              el.css("left", carLeftPos + amountOfMovement + "px");
//              carLeftPos = carLeftPos + amountOfMovement;

                el.animate({
                    "left": "+=100px"
                }, {
                    duration: 300
                   ,easing: "swing"
                });
            };

        // Public Methods

        this.setColour = function (colour){
            el.css("background-color", colour)
            this.colour = colour;
        };


        // when we create an instance of Car this get exicuted
        var init = (function(){
            el.bind("click", function(){
                moveCar();
            });

            el.css({
                backgroundColor: colour,
                color: "#fff"
            });

            $(document).keydown(function(e){
                if (e.keyCode == myKeyToPress) {
                    moveCar();
                    return false;
                }
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
