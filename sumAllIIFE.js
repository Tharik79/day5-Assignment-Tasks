
//Print Sum of all numbers in an array using IIFE

let array = [10, 20, 30, 40];
(function(){
    var total = 0
for (var i = 0; i < array.length; i++) {
    total += array[i]
}
console.log(total);
})();