//Function declaration statement
function greet(name) {
  return  'Hello ' + name;
}

//Function definition expression
var greetTwo = function(name) {
  console.log(arguments);
  return "Hello " + name;
};

//Function with callback
var func = function(callback) {
  var name = 'Tolik';
  callback(name);
}

func(function(n) {
  console.log("Hello " + n);
})

//Function return function
var funcReturnFunc = function(name) {
  return function(hello) {
    console.log(hello + ' ' + name);
  }
}
funcReturnFunc('Mega')('Hello');

//Self-invoking anonymous function
var greeting = (function(name) {
  return name
}('Tolik'))

console.log(greeting);