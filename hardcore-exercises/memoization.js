/**
 * Pure functions can always be cached by input, typically done using a technique called memoization
 **/

var squareNum = memoize(function(x) {
  return x * x;
});

function memoize(f) { // takes a function as argument
  var cache = {}; // initialize a cache object that will be saved in closure

  return function() { // return anonymous function with closure over cache object and passed function
    var argStr = JSON.stringify(arguments); // convert javascript value to JSON string
    cache[argStr] = cache[argStr] || f.apply(f,arguments); // check if cached value already exists, if not then call the passed function with current arguments and save value in cached object
    return cache[argStr];
  }
}
