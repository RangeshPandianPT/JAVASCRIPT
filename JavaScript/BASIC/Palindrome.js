//Write a Program to check whether a string is a palindrome string.
/* A palindrome is a word that reads the same word from forward and backward. This ignores spaces and capitalization.
The code below checks if a string is a palindrome by reversing it and comparing it to the original string. If both are equal, it returns true otherwise, it is false. "GFG" is a palindrome string so it returns true.*/
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("MALAYALAM"));