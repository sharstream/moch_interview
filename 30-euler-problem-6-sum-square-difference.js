// The sum of the squares of the first ten natural numbers is 385.
// The square of the sum of the first ten natural numbers is 3025.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquaresDiff = limit => {
  const range = f => num => Array.from(new Array(num), f);
  const quadRange = range((_, i) => (i + 1) * (i + 1));
  const simpRange = range((_, i) => i + 1);
  const sum = (acc, val) => acc + val;
  const sumOfQuads = quadRange(limit)
    .reduce(sum);
  const simpleSum = simpRange(limit) //2
    .reduce(sum);
  const quadsOfSum = simpleSum * simpleSum;
  console.log(`solution `, quadsOfSum - sumOfQuads);
}
var max = 10;
sumSquaresDiff(max);