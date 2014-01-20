// Create the name space
var MYAPP = {

    init: function() {
        var createCarView = new MYAPP.createCarView($("#make-car"));
    },

    CarView: function(div, colour, carName) {

        // Proporties
        var el = div,

        // Private methods
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
            setColour(colour);
        })();
    },

    createCarView: function(el){
      var bindEvents = function(el){
              el.bind("submit", function(e){
                  e.preventDefault();
                  makeCar();
              })
          },
          template = '<div id="{{other}}" ' +
              'style="background-color:{{colour}};' +
              'padding: 10px;width: 100px; position: relative; ' +
              'margin: 30px;">{{name}}</div>',

          makeCar = function(){
              var name = el.find('#carName').val(),
                  color = el.find('#colour').val(),
                  carHtml = "";


                  carHtml = template.replace("{{other}}","car" + this.numberCars);
                  carHtml =carHtml.replace("{{name}}",name);
                  carHtml = carHtml.replace("{{colour}}",color);

            $("body").append(carHtml);

             new MYAPP.CarView($("#car" + this.numberCars), color, name);
             this.numberCars++;
          };

      this.init = (function(){
          bindEvents(el);
      })();
    }
};



MYAPP.init();
