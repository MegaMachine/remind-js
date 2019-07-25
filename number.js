// from -9007199254740992 to 9007199254740992 
console.log(2 << 8); //binary operation
console.log(0345); // Octal
console.log(10); // Decimal
console.log(0Xfffccc); // Hexadecimal

console.log(12.34); // float
console.log(.123); // float
console.log(1.34E4); // Exponential
console.log(1.34E-4); // Exponential

//Wrapper Objects
var number = new Number(4000); // for Number
console.log(typeof number)// object
console.log(number.toFixed(2)) // two number after dot
console.log(2 .toFixed(2))// we can use methods for primitive type because interpritator wrap automatic Number

//Some methods for number
var n = 31;
console.log(n.toFixed(2)); // 31.00
console.log(n.toExponential(4)); // 3.1000e+1
console.log(n.toPrecision(8)); // 31.000000
console.log(n.toString()); // "31"
console.log(n.valueOf()); // 31
console.log(parseInt("10.123asdf")) // 10
console.log(parseFloat("123.123asdf")) // 123.123

//Math
console.log(Math.sqrt(25));
console.log(Math.pow(3,4));
console.log(Math.PI);
console.log(Math.E);

//Arifmethic operators
var i = 1;
//Unar
console.log(+10);
console.log(-10);
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);

//Binar
console.log(5 + 10);
console.log(5 - 10);
console.log(5 * 10);
console.log(5 / 10);
console.log(5 % 10);
i += 10; // same i = i + 10
console.log(5 > 10);
console.log(5 < 10);
console.log(5 >= 10);
console.log(5 <= 10);
console.log(5 === 10);
console.log(5 !== 10);
console.log(10 == "10"); // true

//
console.log(1 - 'a'); //NaN Not a Number
console.log(Number.NaN);
console.log(1/0); //Positive Infinity
console.log(Number.POSITIVE_INFINITY);
console.log(-1/0); //Negative Infinity
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
