// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What's the smallest positive number that is evenly divisible by all of numbers from 1 to 20.

const leastCommonMultiple = (min, max) => {

  const range = (start, end) => {
    // if (start === end) return [start];
    //recursive case
    // return [start, ...range(start + 1, end)];
    // or using map technique
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
  }
  // find the multiple without any remainder
  // divide a and b to get a remainder r
  // if r = 0, then b is the greatest common divisor
  // else replace a with b and b by r and repeat
  const gcd = (a, b) => {
    // get the greatest common divisor
    return !b ? a : gcd(b, a % b);
  }

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  }

  var multiple = min;

  if (range(min, max).length === 0) {
    return 0;
  }
  
  range(min, max).forEach(number => {
    multiple = lcm(multiple, number)
  });

  return multiple;
}
var min = 1, max = 10;

console.log(`smallest common multiple betwee ${min} and ${max} is: `, leastCommonMultiple(1, 10));