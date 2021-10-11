// How do you find the missing number in a given integer array of 1 to 100.js
// https://stackoverflow.com/questions/37277897/javascript-find-missing-number-in-array/37278363

var numbers = [2,4,5];
var missingNumber = [];

for (var index=0; index<10; index++) {
if(numbers.indexOf(index+1) === -1)
{
missingNumber.push(index+1);
}
}

console.log(missingNumber);