var time = {
  year: 2345,
  month: 11,
  day: 10,
  hour: 11,
  minute: 12,
  second: 13,
  microsecond: 123456
}

// console.log(time); // (*)
time.microsecond++; // (**)

// console.log(time);
time.microsecond++;

// console.log(time);
time.microsecond++;

var obj = {
  a:1
}

var copyObj = obj;
var copyCopyObj = copyObj;
var clone = JSON.stringify(copyCopyObj);
clone = JSON.parse(clone);
copyCopyObj.a = 2;

console.log(obj);
console.log(copyObj);
console.log(copyCopyObj);
console.log(clone);
