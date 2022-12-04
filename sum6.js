// Description
// You are given two numbers, stored in the variable with the following names
// fuel, distance
// Find the value of required, such that
// required = fuel*distance 
// If the value ofrequiredis greater than 50, printEnough, else printGo On

//output : go on

function enoughFuelConsumption(fuel, distance) {
    //write code here
    //console.log("fuel is ",fuel,"\ndistance is ",distance);
    var required = fuel * distance;
    if(required > 50){
        console.log("Enough");
    }
    else{
        console.log("Go On")
    }

}

var fuel = 1;
var distance = 46;
enoughFuelConsumption(fuel,distance);