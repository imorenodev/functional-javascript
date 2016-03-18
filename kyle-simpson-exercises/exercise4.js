function foo() {
  return 3;
}
function bar() {
  return 5;
}

function add(x,y) {
  return x + y;
}
console.log(add(foo(),bar()));

function add2(fn1,fn2) {
  return add(fn1(),fn2());
}

function foo(x) {
  return function(){
    return x; 
  };
}

// Iterative Solution
function addN(arrOfFns) {
  total = 0;
  for (var i = 0; i < arrOfFns.length; i+=2) {
   total += add(arrOfFns[i](),total); 
  }
  return total;
}
addN([foo(4),foo(10),foo(5),foo(3),foo(7)])

// Recursive Solution
function addN(arrOfFns) {
  if (arrOfFns.length <= 2) return add2(arrOfFns[0], arrOfFns[1]);
  return addN(
    [function() {
      return add2(arrOfFns[0],arrOfFns[1]); 
     }].concat(arrOfFns.slice(2))
  );
}

// Array functional helpers Solution
function addN(arrOfFns) {
  // begin with array minus first element (slice(1)), and make first element the starting value 
  // in the .reduce call. 
  return arrOfFns.slice(1).reduce(function(acc, curr){ //acc is the previous total, curr is the element to be added next
    return function() { // we need to wrap our acc value in a function because add2 take two functions
      return add2(acc,curr); // add2 takes the previously composed function holding the total values so far, and adds with the value of the next element curr
    };
  }, arrOfFns[0])(); // call the resulting function to get total of all functions added together.
}
console.log(addN([foo(10),foo(3),foo(7),foo(9)]));

function onlyUniques(arr) {
  return arr.filter(function(index) {
    arr.slice(index).ForEach(function(val){
      return !index === val; 
    }); 
  });
}
onlyUniques([1,2,3,4,5,7,7,8,10,1]);

function isEven(x){
  return x % 2 === 0;
}
[1,2,3,4,5,6,7,8].filter(isEven);



