/**
 * Practice with pure functions
 **/


function bar(x, y) {
  var z;
  foo(x);
  return [y,z];

  function foo(x) {
   y++;
   z = x * y;
  }
}
bar(2,5); //10
bar(5,10); //50



function sum(x,y) {
  return x + y;
}
function mult(x,y) {
  return x * y;
}
function compose2(fn1,fn2) {
  return function comp() {
   var args = [].slice.call(arguments);
   return fn2(
    f1(args.shift(),args.shift()),
    args.shift()
   );
  }
}
var multAndSum = compose2(mult,sum);
multAndSum(2,3,4); //10


