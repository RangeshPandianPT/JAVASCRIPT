// Finding the Largest Number in an Array
//Problem: Given an array of numbers, find the largest number.

function findLargestNumber(arr) {
  if (arr.length === 0) {
    return undefined; // Or throw an error, depending on requirements
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Example usage:
console.log(findLargestNumber([3, 7, 1, 9, 4])); // 9