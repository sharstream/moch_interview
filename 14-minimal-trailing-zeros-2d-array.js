// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

var x, x_length = 4,
  y, y_length = 4,
  map = []

// Don't be lazy
for (x = 0; x < x_length; x++) {
  map[x] = []
  for (y = 0; y < y_length; y++) {
    map[x][y] = Math.floor(Math.random() * 10);
  }
}

var another = [
  [2, 10, 1, 3],
  [10, 5, 4, 5],
  [2, 10, 2, 1],
  [25, 2, 5, 1]
];

function solution(array) {
  // write your code in JavaScript (Node.js 8.9.4)
  var result = 0;
  for (var rowCount = 0; rowCount < array.length; rowCount++) {
    //find th minimal trailing zero path
    var found = true;
    for (var colCount = 0; colCount < array.length; colCount++) {
      var num = array[rowCount][colCount];
      if (num % 10 === 0) {

        if (found) {
          found = false;
          result++;
        }

      }
    }

  }
  return result;
}

console.log(solution(another));