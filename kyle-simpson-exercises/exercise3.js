/**
 * Exercise 3 Recursion
 **/

// Express the following example recursively;

function sumInter() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]; 
  }
  return sum;
}
sumInter(3,4,5);

/*********/

function sumRecur(...args) {
  if (args.length <= 2) {
   return args[0] + args[1]; 
  }
  return (
   args[0] + sumRecur(...args.slice(1)) 
  );
}
sumRecur(2,3,4); // 9


// Take the following function Mult which only takes 3
// arguments, and define it recursively to accept any
// number of arguments being passed in.

function mult(x,y,z) {
  return x * y * z;
}
mult(2,3,4); // 24
mult(2,3,4,5); // 24

/**************/

function mult(...args) {
  if (args.length <= 2) {
   return args[0] * args[1]; 
  }
  return (
   args[0] * mult(...args.slice(1)) 
  )
}
mult(2,3,4,5); // 120
