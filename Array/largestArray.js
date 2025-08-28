/* Find the largest number in an array in JavaScript.
Using a For loop:
The code defines a function findLargest that finds the largest number in an array. It starts by assuming the first element is the largest, then iterates through the array. If a larger number is found, it updates the largest value. Finally, it returns the largest number which is 100.
*/



function findLargest(arr) {
        let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i]; 
        }
    }
    return largest;
}
​
console.log(findLargest([99, 5, 3, 100, 1]));