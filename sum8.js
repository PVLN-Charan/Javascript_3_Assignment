// Description

// You are given a number, stored in the variable with the name total
// If the following expression is true
// total == 100, print "A", without quotes
// Else if the following expression is true,
// total >= 90, print "B", without quotes
// Else if the following expression is true,
// total >= 80, print "C", without quotes
// Else, print "F", without quotes

//ouput : c 

function printGrade(total) {
    // Write code here
    console.log("Total marks is",total);
    if(total == 100){
        console.log("A");
    }
    else if(total >=90){
        console.log("B");
    }
    else if(total >=80){
        console.log("C");

    }
    else{
        console.log("F");
    }
}

var total = 80;
printGrade(total)