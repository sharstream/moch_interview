
// 1. Finding the factorial using a loop in javascript
var inputNumber = prompt('Please enter an integer');
var total = 1;

for (i = 0; i < inputNumber; i++) {
  total = total * (inputNumber - i);
}

console.log(inputNumber + '! = ' + total);

// 2. make a string alphabetical order using only javascript
function makeAlphabet(str) { 
  str.toLowerCase();
  var arr = str.split(''),
  alpha = arr.sort().join('').replace(/\s+/g, '');
  return alpha; 
}
console.log(makeAlphabet("dryhczwa test hello"));

// 3. JavaScript Demo: Statement - For...In iterate a obj in javascript
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 += object1[property1];
}

console.log(string1);
// expected output: "123"

// 4. Square each number in an array in javascript
function makeSquare(arr) {
  return arr.map(function (x) {
    return Math.pow(x, 2);
  });
}