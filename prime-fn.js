
// Print prime numbers using anonynous function

let array = [1,2,3,4,5,6,7,8,9,10];

let isPrime = function(num) {
    
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
  
  var primeNum = array.filter(isPrime);
  
  console.log(primeNum);

  //Print prime numbers using IIFE

   let isPrime = (function(num) {
    
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;
    
  })
  var primeNum = array.filter(isPrime);
    console.log(primeNum);
  
  
  

  // Print prime Numbers using arrow function.


  const primeNum = array.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  });
  console.log(primeNum);
    
    
        
    





