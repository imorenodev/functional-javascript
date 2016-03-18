/**
 * Currying Example
 **/


function curry(fn) {
  return function() {
    // check to see how many arguments the fn function was declared to receive
    // and how many arguments it was actually passed.
    if (fn.length > arguments.length) {  // if fn hasn't been passed the correct amount of arguments then--> 
      var slice = Array.prototype.slice;
      var args = slice.apply(arguments);
      return function() {  // return a new function to be called on the function to pass remaining arguments later
        return fn.apply(null, args.concat(slice.apply(arguments))); // add new arguments passed into fn to its current arguments list
      };
    }
    return fn.apply(null, arguments); // if fn receives proper amount of arguments then do nothing, essentially
  }
}
