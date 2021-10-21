
//Convert all the strings to title caps in a string array
  //using arrow function

 let titleCaps = (str.split(' ')
   .map(s => s[0].toUpperCase() + s.substr(1).toLowerCase())
   .join(' '));
console.log((titleCase("guvi is the best")));