// suppose you're given a binary tre represented as an array. For example, [3,6,2,9,-1,10] represents the following binary tree (where -1 is a non-existent node)
//Write a function that determines whether the left or right branch of th tree is larger. The size of each branch is the sum of the node values. The function should return the string "Right" if the right side is larger and "Left" if the left side is larger. If the tree has 0 nodes or if the size of the branches are equal, return an empty string.

const input = [-3, -6, 2, 9, -1, -10];

const solution = (arr) => {
  // Type your solution here

  if (arr.length === 0)
    return "";
  else {
    if (arr.length === 1)
      return "";
  }

  let left = 0;
  let right = 0;
  arr.forEach(number => {
    if (number > right) {
      right += number;
    } else {
      left += number;
    }
  });

  if (right === Math.abs(left))
    return "";

  return right > Math.abs(left) ? "Right" : "Left";
}

// console.log(solution(input));

// The fibonacci sequence is a sequence of numbers where each numbers is the sum of th two previous numbers in the sequence, qhere the first tow numbers are 1 and 2. The first 10 numbers on the fibonacci sequence are: 1,2,3,5,8,13,21,34,55,89
//Write a function that takes a number, max, and returns the sum of all the even fibonacci numbers lesss than max

const number = 1000000000000000;

const fibonacci = max => {

  let previous = 0,
    sumEven = 0,
    current = 1,
    next;

  for (let i = 0; i < max; i++) {
    next = current + previous;
    previous = current;
    current = next;
    //is even
    if (current % 2 === 0 && current < max)
      sumEven += current;
  }

  return sumEven;
}

// recursion version closure
const sumOfEvenFibsLessThan = n => {

  /* Returns the array of Fibonacci numbers less than n */
  var fibsLessThan = n => {

    /* Takes an Array, returns an Array */
    var generateFibs = fibs => {
      var nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
      // test against max
      if (nextFib >= n) {
        return fibs;
      } else {
        // concatinate next number to array
        return generateFibs(fibs.concat([nextFib]));
      }
    };
    // check input validity
    if (n <= 1) {
      return [];
    };
    // check base case
    if (n <= 2) {
      return [1, 1];
    };
    // otherwise generate array recursively
    return generateFibs([1, 1]);
  };

  return fibsLessThan(n).filter(x => x % 2 === 0).reduce((x, y) => x + y);
}

// console.log(`fibonacci simple sequence of ${number} is: `,fibonacci(number));
console.log(`fibonacci recursion sequence of ${number} is: `, sumOfEvenFibsLessThan(number));