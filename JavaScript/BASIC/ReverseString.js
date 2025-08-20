// Write a Program to reverse a string in JavaScript.
//This code splits the string into an array of characters using the split() method, reverses the array, and joins it back into a string using the join() method.
function reverseString(str) 
{
  return str.split("").reverse().join("");
}

console.log(reverseString("RANGESHPANDIAN PT"));