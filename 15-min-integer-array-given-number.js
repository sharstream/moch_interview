var number = [2, 4, 8, 15, 63, 999, 7, 1];
var arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
];
var smallest = 0;

function solution(N, givenNumber) {
  // write your code in JavaScript (Node.js 8.9.4)
  var smallestNumber = 0;
  var result = [];
  for (var i = 0; i < N.length; i++) {
    if ( N[i] < givenNumber) {
      smallestNumber = N[i];
      result.push(N[i]);
    }
  }
  return result;
}

console.log(solution(number))