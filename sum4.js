// Description
// You are given a number, stored in the variable with the name N
// If the number is even, printEven, else printOdd
// If the number is divisible by 2, the number is considered Even, else the number is considered Odd

//output : odd 

function ttfEvenOrOdd(N) {
    // Write code here
    console.log(N);
    if(N%2==0){
        console.log(N,"is a even number");
    }
    else{
        console.log(N,"is a odd number");
    }
}
var N =5;
ttfEvenOrOdd(N)
