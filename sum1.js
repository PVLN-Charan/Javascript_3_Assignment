// Description
            // You are given a number, stored in the variable with the name N
            // Print Yes, if the number is divisible by 4, else printNo
            // Note : A number is divisible by 4, if the result of the following expression number % 4 == 0
//outpur : Yes 

function divisibleBy4(N) {
    // Write code here
    console.log(N);
    if(N%4==0){
        console.log(N,"= Yes it is divisible by 4")
    }
    else{
        console.log(N,"= No it is not divisible by 4")
    }
}
var N = 12;
divisibleBy4(N)