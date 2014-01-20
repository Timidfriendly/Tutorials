// Create the name space
var MYAPP = {
    /* property contains data */
    carOwner	: "Michael\'s",

//    Methods - becuase it is a function
    init: function() {
        var michaelsCar = new MYAPP.Car($("#other"), "pink", "Car of michael", 39);
        console.log(michaelsCar);
        
        var davidsCar = new MYAPP.Car($("#second-other"), "blue", "Car of David", 68);

    },

    Car: function(div, colour, carName, myKeyToPress) {

        // Proporties
        var el = div,
//            carLeftPos = 0,
//            amountOfMovement = 20, //px

        // Private methods
            moveCar = function(){
//              el.css("left", carLeftPos + amountOfMovement + "px");
//              carLeftPos = carLeftPos + amountOfMovement;

                el.stop().animate({
                    "left": "+=100px"
                }, {
                    duration: 300,
                    easing: "swing"
                });
            },
            setCarName = function (carName){


                el.html(carName)
                this.carName = carName;


            };

        // Public Methods

        this.setColour = function (colour){
            el.css("background-color", colour)
            this.colour = colour;
        };




        // when we create an instance of Car this get exicuted
        var init = (function(){
            setCarName(carName);
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
