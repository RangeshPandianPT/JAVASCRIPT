'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getSecondLargest(nums) {
    let uniqueNums = [...new Set(nums)];
    
    uniqueNums.sort((a, b) => b - a);
    
    return uniqueNums[1];
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}



function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}