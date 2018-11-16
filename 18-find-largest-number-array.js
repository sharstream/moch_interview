// JavaScript code below
// Use printErr(...) to debug your solution.
//Should return the largest integer from the numbers arr. Numbers array 
// is an array of integer which always contains at least one number

var arr = [2, 4, 10, 5, 1];

function findLargest(numbers) {
  // Your code goes here
  var largest = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

function anotherLargest(numbers) {
  // Your code goes here
  var largest = 0;
  numbers.forEach(number => {
    if(number > largest) {
      largest = number;
    }
  });
  return largest;
}

console.log(anotherLargest(arr));