// Generating all combinations of an array

// I'm generating all combinations of an array, so for instance ["a", "b", "c", "d"]

var letters = ["a", "b", "c"];
var comb = [];

function combinations(str) {

  var fn = function(active, rest, a) {

    if (!active && !rest)
      return;
    if (!rest)
      a.push(active);
    else {
      fn(active + rest[0], rest.slice(1), a);
      fn(active, rest.slice(1), a)
    }
    return a;

  }
  return fn("", str, []);

}

// Using hashmap
function getSubArrays(arr) {
  var len = arr.length,
    subs = Array(Math.pow(2, len)).fill();
  subs.push("");
  return subs.map((_, i) => {
    var j = -1,
      k = i,
      res = [];
    while (++j < len) {
      k & 1 && res.push(arr[j]);
      k = k >> 1;
    }
    return res;
  }).slice(1);
}

console.log(JSON.stringify(getSubArrays(letters)));
// console.log(combinations("abcd"));