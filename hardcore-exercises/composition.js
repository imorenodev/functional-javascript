var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};

var toUpperCase = function(x) {
  return x.toUpperCase();
};
var exclaim = function(x) {
  return x + '!';
};

var shout = compose(exclaim, toUpperCase);

console.log(shout('hello world'));

var CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true,
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false,
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false,
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false,
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false,
}];

var toConsole = function(x) {
  console.log(x);
};
var filterByKey = function(key, obj) {
  return obj[key];
};

var names = CARS.map(compose(toConsole,filterByKey.bind(null, 'name')));
