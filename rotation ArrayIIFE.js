
const arr = [1,2,3,4,5,6,7];
const k = 3;
var rotate= (function (arr, k) {
  let dummy = 0;
  const leng = arr.length;
  k = k % leng;
  for (let i = 0; i < k; i++) {
     dummy = arr.pop();
     arr.unshift(dummy);
  }
 return arr;
});
console.log(rotate(arr, 3)); 