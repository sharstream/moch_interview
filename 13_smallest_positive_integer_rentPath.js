// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].*/

var arr = [1,3,6,4,1,2];

function solution(a) {
    // write your code in JavaScript (Node.js 8.9.4)
    var swap = function(i, j) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    };
    
    for(let i = 0; i < a.length; i++) {
        while(0 < a[i] && a[i] - 1 < a.length
                && a[i] != i + 1
                && a[i] != a[a[i] - 1]) {
            swap(i, a[i] - 1)
        }
    }
    
    for(let i = 0; a.length; i++) {
        if(a[i] != i + 1)
            return i + 1;
    }
    
    return a.length + 1;
}

console.log(solution(arr));

var A = 10;
var B = "10"
var C = (A === B)

// console.log(C);

var year = new Date().getFullYear();

var date = new Date(year, 2, 1);

// var newDate= new Date(today.getCurrYear(), 3, 1)

// console.log(date); // Tue 
