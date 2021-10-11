// How do you find all pairs of an integer array whose sum is equal to a given number?
// https://stackoverflow.com/questions/36967053/pair-of-elements-from-a-specified-array-whose-sum-equals-a-specific-target-numbe

function pairForSumOfTwoElements(numbers, sum) {

    let keyValueDictionary = {};
    let arrayOfTwoElements = [];

    for (let index = 0; index < numbers.length; index++) {
        if( keyValueDictionary[numbers[index]] || ( keyValueDictionary[numbers[index]] === 0) ) {
            arrayOfTwoElements.push( [keyValueDictionary[numbers[index]], numbers[index]] );
        } else {
            keyValueDictionary[sum - numbers[index]] = numbers[index];
        }
    }

    return arrayOfTwoElements;

}

let numbers = [1,2,3, 0,5, 6, -1, -2, 4, 7];
let sum = 5;

console.log(pairForSumOfTwoElements(numbers, sum));