// Score: 13/15

// Function 1
function a(){
    return 35;
}
console.log(a())
// Predict:
// 35
// Actual:
// 35

// Function 2
function a(){
    return 4;
}
console.log(a()+a());
// Predict:
// 8
// Actual:
// 8

// Function 3
function a(b){
    return b;
}
console.log(a(2)+a(4));
// Predict
// 6
// Actual:
// 6

// Function 4 (x)
function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
// Predict
// 3
// Actual:
// 3,9

// Function 5
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
// Predict
// 40
// Actual:
// 40

// Function 6
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// Predict
//  4
// Actual:
// 4

// Function 7
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// Predict
// 10, 3, 30
// Actual:
// 10,3,30

// Function 8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// Predict
// 3,4
// Actual:
// 3,4

// Function 9 (x)
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// Predict
// 2,5,8
// Actual:
// 2,5,8,11

// Function 10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// Predict
// 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9
// Actual:
// 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9

// Function 11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// Predict
// Function is not called, no output
// Actual:
// No output

// Function 12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// Predict
// Function is not called, no output
// Actual:
// No output

// Function 13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// Predict
//  10
// Actual:
// 10

// Function 14
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// Predict
// 15,10
// Actual:
// 15,10

// Function 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// Predict
// 15,15
// Actual:
// 15,15
