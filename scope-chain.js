//In JS only function make local scope for variable
var i = 5;

var func = function() {
  var i = 10;
  console.log(i);
  var innerFunc = function () {
    console.log(i); //undefined because move to top  only declaration without initialization 
    var i = 15; //Hoisting: Inretpretaitor all variables in function move to top; 
    /*
      var i;
      console.log(i);  This is same that on top code;
      i = 15;
    */
  }
  innerFunc();
}
func();
console.log(i);