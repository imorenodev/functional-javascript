/**
 * Exercise 2 - Practice with Closure
 **/

function foo(x,y) {
  return function bar() {
   return x + y;
  } 
}
var x = foo(3,4);
x(); // 7
x(); // 7
