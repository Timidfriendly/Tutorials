var TEST = {};

(TEST.clickingMichaelsCarMovesItToTheRight = function() {
    var car = $("#other");

    // setting up colour testing parameter
    var initialName = car.html();
    console.log(initialName);


    // setting up click test parameters
    var intialPostitionOfCar = car.css("left");
    car.click();
    var finalPostitionOfCar = car.css("left");





    if(intialPostitionOfCar !== finalPostitionOfCar){
        console.log("intialPostitionOfCar = " + intialPostitionOfCar);
        console.log("finalPostitionOfCar = " + finalPostitionOfCar);
        console.log("pass");

    } else  {
        console.log("intialPostitionOfCar = " + intialPostitionOfCar);
        console.log("finalPostitionOfCar = " + finalPostitionOfCar);
        console.log("fail");

    }
})();


//var manualClickTest_CarMovesItToTheRight = new TEST.clickingMichaelsCarMovesItToTheRight($(".car"));