var countdownGenerator = function (x) {
// Return this function
return function() {
// If x is grater than 0
if(x > 0) {
  //log x
  console.log('T-minus ' + x);
}
// 'If x equals to 0'
if (x === 0) {
  // 'Logs Blast Off!''
  console.log('Blast Off!');
}
// If x less than 0
if (x < 0) {
  // Logs 'Rockets already gone, bub!''
  console.log('Rockets already gone, bub!');
}
// Decrement x value
x--;
}

};

//Variable
var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!