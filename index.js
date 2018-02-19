// Declare some variables
var x = Math.round(Math.random() * 10); // Integer between 0 and 9
var y = 0;
var z = 0;
var total = 0;

// Display some informations
console.log("**********");
console.log("START");
console.log("x is a random integer = " + x);

// Define a function with 1 parameter
// but don't execute it at this time.
// In fact it will only be fired at the very end
// THIS IS THE CALLBACK
function myFunc1(arg) {
  total = z * 2 + arg;
  console.log("myFunc1(arg)");
  console.log("arg is a random integer = " + arg);
  console.log("total = z * 2 + arg = " + z + " * 2 + " + arg + " = " + total);
  console.log("END");
  console.log("**********");
}

// Run another function with the callback function as argument
console.log("myFunc1 is the callback function: " + myFunc1);
console.log("Now we run myFunc2, with myFunc1 as an argument")
console.log("**********");
myFunc2(myFunc1);

// Define myFunc2 which takes a single parameter 'cb'
// It runs another function which takes 2 arguments:
// the callback and the returning result of another function
// which itself has two arguments: the callback and a random integer
function myFunc2(cb) {
  console.log("myFunc2(cb)");
  x += 5;
  console.log("x = x + 5 = " + x)
  console.log("cb has the value of the argument = myFunc1: " + cb);
  // console.log(cb);
  console.log("Now we run myFunc3, which fires myFunc4 to use it as an argument")
  console.log("**********");
  myFunc3(cb, myFunc4(cb, Math.round(Math.random() * 10)));
}

// Define another function with 2 parameters
// This function will finally fire the callback!!!
function myFunc3(cb, arg2) {
  console.log("myFunc3(cb, arg2)");
  console.log("arg2 = y (returning from myFunc4) = " + arg2);
  z = x + arg2;
  console.log("z = x + y = " + z);
  console.log("cb still have the same value: " + cb);
  console.log("Here we are! Now myFunc3 fires the callback")
  console.log("**********");
  cb(4);
}

// Define another function with 2 parameters
// This function returns a value that will be used
// as an argument by myFunc3 (see above)
function myFunc4(cb, arg3) {
  console.log("myFunc4(cb, arg3)");
  console.log("arg3 is a random integer = " + arg3)
  y = x + arg3;
  console.log("y = x + arg3 = " + x + " + " + arg3 + " = " + y);
  console.log("cb still have the same value: " + cb);
  console.log("**********");
  return y;
}