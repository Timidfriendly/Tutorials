// Create the name space
var MYAPP = {
    /* property contains data */
    carOwner	: "Michael\'s",
    numberCars : 0,

//    Methods - becuase it is a function
    init: function() {
        var michaelsCar = new MYAPP.CarView($("#other"), "blue", "Car of michael", 39);
        console.log(michaelsCar);
        
        var davidsCar = new MYAPP.CarView($("#second-other"), "brown", "David's Car", 68);
        var createCarView = new MYAPP.createCarView($("#make-car"));
    },

    CarView: function(div, colour, carName, myKeyToPress) {

        // Proporties
        var el = div,

        // Private methods
            moveCar = function(){
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


        // when we create an instance of Car this get executed
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

    createCarView: function(el){
      var bindEvents = function(el){
              el.bind("submit", function(e){
                  e.preventDefault();
                  makeCar();
              })
          },
          template = '<div id="{{other}}" style="background-color:{{colour}}; padding: 10px;width: 100px; position: relative; margin: 30px;">{{name}}</div>',
          makeCar = function(){

              var name = el.find('#carName').val(),
                  color = el.find('#colour').val(),
                  carHtml = "";


                  carHtml = template.replace("{{other}}","car" + this.numberCars);
                  carHtml =carHtml.replace("{{name}}",name);
                  carHtml = carHtml.replace("{{colour}}",color);



            $("body").append(carHtml);


             new MYAPP.CarView($("#car" + this.numberCars), color, name, 68);

              this.numberCars++;
          };

      this.init = (function(){
          bindEvents(el);
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
