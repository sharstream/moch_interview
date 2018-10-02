/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

 //389. Find the Difference
var findTheDifference = function (s, t) {
    if (s.length === 0) return t;
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var sSum = s.split('').map(e => e.charCodeAt(0) - 'a'.charCodeAt(0)).reduce((a, b) => a + b);
    var tSum = t.split('').map(e => e.charCodeAt(0) - 'a'.charCodeAt(0)).reduce((a, b) => a + b);
    return letters[tSum - sSum];
};