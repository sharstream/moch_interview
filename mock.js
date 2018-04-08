/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

 //389. Find the Difference
var findTheDifference = function (s, t) {

    var i = 0;
    var j = 0;
    var result = "";

    while (j < t.length) {
        if (s[i] != t[j] || i == s.length)
            result += t[j];
        else
            i++;
        j++;
    }
    return result;
};