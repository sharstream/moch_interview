// QUESTION 1
// Write a function that takes in a string, 'string', and return true 
// if 'string' is a permutation of a palindrome and false otherwise.
// A palindrome is a string that reads the sme backwards, like 'racecar'. If we reverse
// the string 'racecar', it doesn't change.

const isPalindrome = s => {
  // Type your solution here 
  const reverseString = string => string.split('').reverse().join('');
  //step 1: check the palindrome
  if (s) {
    let regex = /\.|\,| |\!|\?|\'|\"|\/|\\|\-|\_|\+|\‘|\’/g;
    let clearStr = s.replace(regex, '').toLowerCase();
    var word = s.split('').reverse().join('');
    return clearStr == reverseString(clearStr);
  }
  //step 2: check any possible permutation
  // Retrieve all possible permutations
  // store all no-palindrome but possible permutations
  // loop each permutation to compare with the original 'string'
  // then check if there is a possible permutation
  return 'string was not supplied';
}

var input = 'racecar'
// console.log(`is a palindrome: ` + isPalindrome(input));

// QUESTION 2
// Given an array of numbers, find the kth largest number
// If there are duplicates in the array, return the kth element 
// if the array were sorted in descending order, not thekth largest distinct number.
var nums = [1, 4, 3, 4, 2, 5];

const largestNumber = (numbers, k) => {
  // Type your solution here 

  let largest, pos = 0,
    repeat = false;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
      if (numbers[i] === largest) {
        repeat = true;
        if (repeat)
          pos = i;
      }
    }

    return pos;
  };
}
// OR
function kthHighest(numbers, k) {
  var sorted = numbers.sort(function (a, b) {
    return a - b;
  });
  return sorted[sorted.length - k];
}

// console.log(largestNumber(nums, 3));

// QUESTION 3
// In most text editor, when you select an open parenthesis, the editor
// will highlight the corresponding closing parenthesis. Write a function
// that implements this feature. Specially, given a valid parenthesis expression
// and the index of an open parenthesis, return the index of the closing parenthesis.
// If the index of a closing parenthesis is specified, return -1.
function findClosingBracketMatchIndex(parentesis, index) {
  let openBracketCount = 0;
  let givenBracketPosition = -1;
  let pos = -1;
  for (let i = 0; i < parentesis.length; i++) {
    let char = parentesis[i];
    if (char === '(') {
      openBracketCount++;
      if (i === index) {
        givenBracketPosition = openBracketCount;
      }
    } else if (char === ')') {
      if (openBracketCount === givenBracketPosition) {
        pos = i;
        break;
      }
      openBracketCount--;
    }
  }
  return pos;
}
var position = 4;
// console.log(`counting...`, findClosingBracketMatchIndex('(*(*()**(())())**)', position));
/*-----------------------------------------*/
// Arrow function workspace
// declaration
function addOne(foo) {
  return foo + 1;
}
// expression
var addOne = function(foo) {
  return foo + 1;
}
// equivalent arrow funciton
const addOne1 = foo => foo + 1;
// arrow function with optional syntax added back in
const foo1 = (bar) => {
  return bar + 1;
}
// dealing with complexity
const addOneToEach = ar => ar.map(num => num + 1)
const addOneToEachMore = ar => 
  ar.map(entity => {
    if (typeof entity === 'string') {
      return parseInt(entity) + 1;
    }
    return entity + 1;
  })
const addOneToEachMoreComplex = ar => 
  ar.map(entity => typeof entity === 'string'
    ? parseInt(entity) + 1
    : entity + 1
  )
const ensureNum = entity => 
  typeof entity === 'string' ? parseInt(entity) : entity

const addOne2 = num => num + 1
const addOneToEachAnother = ar => 
  ar.map(ensureNum)
    .map(addOne)
// anonymous function callback
function addOneToEachAnonymous(ar) {
  return ar.map(function(num) {
    return num + 1;
  })
}
// anonymous callback with arrow functions
const addOneToEach1 = ar => ar.map(num => num + 1)
// named function applied by anonymous callback arrow function
const addOne3 = num => num + 1
const addOneToEach2 = ar => ar.map(num => addOne3(num))
// named function callback
const addOne4 = num => num + 1
const addOneToEach3 = ar => ar.map(addOne4)
// incremental by a number
const addNums = (a, b) => a + b
const incrementEach = (ar, by) => 
  ar.map(ensureNum)
    .map(num => addNums(num, by))
// adding the curry
const sum = function(a, b) {
  return a + b
}
const addNums1 = a => b => a + b
// no curry
const sum1 = (a, b) => a + b
// with curry
const sum2 = a => b => a + b
const incrementEach1 = (ar, by) => 
  ar.map(ensureNum)
    .map(addNums1(by))
// console.log(`adding curry: `, sumCurry(2)(3))
console.log(incrementEach1([1, '2', 3], 4))
// console.log(foo);
foo = 1
// console.log(foo);
var foo
// console.log(addOne(1));
