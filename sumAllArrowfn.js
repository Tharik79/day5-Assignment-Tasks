
//Print Total of all numbers in an array using arrow function

let array = [10, 20, 30, 40];
let total = array.reduce((sum, acc) => sum + acc,0);
console.log(total);