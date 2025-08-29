//Counting Vowels in a String
//Problem: Count the number of vowels (a, e, i, o, u, case-insensitive) in a given string.

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Example usage:
console.log(countVowels("Hello World")); // 3