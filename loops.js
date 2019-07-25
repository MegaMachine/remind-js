//for( init; test; increment (step 1), decrement (step 3)) { instruction (step 2) } 

var i;
for (i = 0; i < 10; i++ ) {
  console.log('\x1b[31m','i inside loop: ', i);
}
console.log('\x1b[32m','i excide loop: ', i);

//while(expression) { instruction }
var j = 10;
while(j--){
  console.log('\x1b[31m','j inside loop: ', j);
}
console.log('\x1b[32m','j excide loop: ', j);

//do { instruction } while (expression)
var k = 0;
do {
  console.log('\x1b[31m','k inside loop: ', k++);
} while (k < 10);
console.log('\x1b[32m','k excide loop: ', k);
