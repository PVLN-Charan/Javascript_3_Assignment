// Description

// You are given two integers, stored in the variable with the following names
// L, W
// Also, you are given another two integers, stored in the variable with the following names
// length & width
// If the value stored in length is greater than the value stored in L and the value stored in width, is greater than the value stored in W, printUpload
// Else If the value stored in length is less than the value stored in L, printIncrease Length
// Else if the value stored in width, is less than the value stored in W, printIncrease Width

//output : Increase Length

function profilePic(L, W, length, width) {
    //Write code here
    console.log("L is",L,"\n W is",W,"\nlength is",length,"\n width is",width);
    if(length > L){
      if(width > W){
       console.log("Upload");
      }
    }
    else if(length < L ){
      console.log("Increase Length ");
    }
    else if(width < W){
      console.log("Increase Width");
    }
   
  }

  var L = 12;
  var W = 14;
  var length = 8;
  var width = 19;

  profilePic(L, W, length, width)
