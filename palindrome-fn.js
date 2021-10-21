
//Return Palindrome in an array using anonymous function
const array = ['madam', "madan", 456654, 'pop', 'hello'];

// const isPalindrome = function(s) {
//    const str = String(s);
//    let i = 0;
//    let j = str.length - 1;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       }
//       else {
//          return false;
//       }
//    }
//    return true;
// };
// const myPalindrome = arr => arr.filter(s => isPalindrome(s));

// console.log(myPalindrome(arr));


//Return Palindrome in an array using IIFE

// const isPalindrome = (function(s) {
//     const str = String(s);
//     let i = 0;
//     let j = str.length - 1;
//     while(i < j) {
//        if(str[i] === str[j]) {
//           i++;
//           j--;
//        }
//        else {
//           return false;
//        }
//     }
//     return true;
//  });
//  const myPalindrome = arr => arr.filter(s => isPalindrome(s));
 
//  console.log(myPalindrome(arr));

//Return Palindrome in an array using arrow function




console.log(isPalindrome(array));


