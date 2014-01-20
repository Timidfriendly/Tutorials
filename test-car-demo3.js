var TEST = {};

(TEST.clickingMichaelsCarMovesItToTheRight = function(whichCar) {
    var car = $("#other");

    // setting up colour testing parameter
    var initialName = car.html();
    //console.log(initialName);


    // setting up click test parameters
    var intialLeftPostitionOfCar = car.css("left");
    car.click();
    var finalPostitionOfCar = car.css("left");

//    var positionData = [
//        "intialLeftPostitionOfCar = " + intialLeftPostitionOfCar,
//        "finalPostitionOfCar = " + finalPostitionOfCar);
//
//   ];



    if(intialLeftPostitionOfCar !== finalPostitionOfCar){
        console.log("intialLeftPostitionOfCar = " + intialLeftPostitionOfCar);
        console.log("finalPostitionOfCar = " + finalPostitionOfCar);
        console.log("pass");

    } else  {
        console.log("intialLeftPostitionOfCar = " + intialLeftPostitionOfCar);
        console.log("finalPostitionOfCar = " + finalPostitionOfCar);
        console.log("fail");

    }
})();


//var manualClickTest_CarMovesItToTheRight = new TEST.clickingMichaelsCarMovesItToTheRight($(".car"));

TEST.clickingMichaelsCarMovesItToTheRight($("#second-other"));

(manualTest = function(){
    var myCar = $("#third-other");
    myCar.click(function() {
        TEST.clickingMichaelsCarMovesItToTheRight(myCar);
    });
})();