



// Variable holds a function that returns another function
var rollLoadedDie = function makeLoadedDie() {
  // Array with preset numbers
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  // Variable holds number 0 whoch represents the index of the first element of the array
  var number = 0;
  // Nexted function that is returned by the main function
  return function() {
  // Res defines the output we want: the array index where we want start counting
  res = list[number];
  // Increments the counting of the index
  number++
  // Returns the output
  return res;
  }
  // (); Immediatelly invoke the main function
}();

console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());