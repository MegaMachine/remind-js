/*
  When we create a function in which we allocate different functions, 
  we create an object with local variables that embeds the function, 
  so this object does not remove the garbage collector, because this
  object always refers to the function that is assigned to this object
*/
var func = function(){
  var i = 10;
  return function() {
    return i;
  }
}

var anotherFunc = function() {
  var i = 20;
  console.log(func()());
}

anotherFunc();

//Exsample without self-invoke and embedded function
var counterOne = function() {
  var count = 0;
  return count++;
};
console.log('counterOne: ',counterOne()); // 0
console.log('counterOne: ',counterOne()); // 0
console.log('counterOne: ',counterOne()); // 0
console.log('counterOne: ',counterOne()); // 0

//Exsample closure 
var counterTwo = (function() {
  var count = 0;
  return function(num) {
    count = num || count;
    return count++;
  }
}());
console.log('counterTwo: ',counterTwo(500)); // 0
console.log('counterTwo: ',counterTwo()); // 1
console.log('counterTwo: ',counterTwo()); // 2
console.log('counterTwo: ',counterTwo()); // 3

//Different approach
var counterThree = function(num) {
  counterThree.count = num || counterThree.count;
  return counterThree.count++;
}
counterThree.count = 0;
console.log('counterThree: ',counterThree(123)); // 0
console.log('counterThree: ',counterThree()); // 1
console.log('counterThree: ',counterThree()); // 2
console.log('counterThree: ',counterThree()); // 3
