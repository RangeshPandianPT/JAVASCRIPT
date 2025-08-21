//Using indexOf() and lastIndexOf() Methods
//This approach identifies unique characters by checking if the first and last occurrence of each character is the same.




const s1 = "javascript";
const s2 = s1.split("").filter((char, index, arr) =>
    arr.indexOf(char) === arr.lastIndexOf(char));
​
console.log(s2);