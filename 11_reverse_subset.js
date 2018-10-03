// reverse every consecutive elements of the given subarray

// utility function to swap two elements arr[i] in the array
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// utility function to reverse sub-array arr[i, j]
function reverse(arr, i, j) {
  if (i >= j) {
    return arr;
  }

  //else swp two elements
  swap(arr, i, j)

  //recurse for next pair
  return reverse(arr, i + 1, j - 1);
}

// reduce method for an array
function reverseReduce(str) {
  return str.split("").reduce((rev, char) => char + rev, '');
}

function reverseTernary(str) {
  return str ? reverseTernary(str.substr(1)) + str[0] : str
}

function reverseLoop(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function mySolution(arr) {
  arr = arr.split('');
  var len = arr.length,
    halfIndex = Math.floor(len / 2) - 1,
    tmp;
  for (var i = 0; i <= halfIndex; i++) {
    tmp = arr[len - i - 1];
    arr[len - i - 1] = arr[i];
    arr[i] = tmp;
  }
  return arr.join('');
}

var word = "abcd";

console.log('using my solution: ' + mySolution(word));
// console.log('using a loop: '+reverseLoop(word));
// console.log('using first approach: '+reverse(word, 0, 4));
// console.log('using ternary approach: '+reverseTernary(word));
// console.log('using reduce approach: ' + reverseReduce(word));
// console.log(reverse(letters.split(","). join(), 0, letters.split("").length));