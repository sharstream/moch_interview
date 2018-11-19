// var matrix = [
//     [5, 9, 2],
//     [8, 1, 7],
//     [6, 3, 4]
// ]
// console.log(matrix[1][2]);

var input = [7, 2, 6, 3];

const solution = (numbers) => {
  // Type your solution here 
  if(numbers.lenght === 0)
    return 0;
  else {
    let largest = 0;
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] > largest)
      largest = numbers[i];
    }
    // numbers.forEach(number => {
    //   if(number > largest)
    //     largest = number;
    // });
    return largest;
  }
};

console.log(solution(input));