var person = {
  name: 'John',
  greet: greet
}
var anotherPerson = {
  name: 'Bob',
  greet: greet
}
function greet(greeting) {
  return greeting +'! My name is ' + this.name;
}
console.log(person.greet('Hi'));
console.log(anotherPerson.greet('Pryvit'));
console.log(greet('wow'));
console.log(anotherPerson.greet.call(person, 'Bonjour')); //Викликає функцію
console.log(anotherPerson.greet.apply(person, ['Bonjour'])); //Викликає функцію

var bound = greet.bind(anotherPerson); //Просто звязує функуцію з обєктом

console.log(bound("Hih"))