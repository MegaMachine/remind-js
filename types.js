//Primitive data types
var iNull = null;
var iUndefined = undefined;
var iNumber = 1;
var iString = 'str';
var iBoolean = true;
var iSymbol = Symbol(1);

//Object data types
var iObj = {a:1};
var iFunc = function() {
  return 'hi';
}
var iArray = [1,2];
var iRegexp = /w+/g;


console.log(typeof iNull); //object
console.log(typeof iUndefined); //undefined
console.log(typeof iNumber); //number
console.log(typeof iString); //string
console.log(typeof iBoolean); //boolean
console.log(typeof iSymbol); //symbol


console.log(typeof iObj); //object
console.log(typeof iFunc); //function
console.log(typeof iArray); //object
console.log(typeof iRegexp); //object