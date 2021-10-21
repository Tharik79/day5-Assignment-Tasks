
// Remove Duplicates from an array using Anonymous function

//let array = [1, 2, 3, 4, 2, 3];

// let removedDupArray = function(arr){
    
//     let  removedDupArray = [...new Set(arr)];

//     console.log(removedDupArray);
//  } 
//  removedDupArray(array);


 // Remove Duplicates from an array using IIFE

 let array = [1, 2, 3, 4, 2, 3];

let removedDupArray =  (function(arr){
    
    let  removedDupArray = [...new Set(arr)];

    console.log(removedDupArray);
 });
 removedDupArray(array);