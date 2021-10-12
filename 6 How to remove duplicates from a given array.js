// How to remove duplicates from a given array

let numbers = [0, 1, 1, 2, 2, 2, 3, 3, 3];

// Easiest option:
let setOfNumbers = new Set(numbers);

setOfNumbers.forEach((key) => {
    console.log(key);
});

var newSetOfNumbers = Array.from(setOfNumbers);
console.log(newSetOfNumbers);

// Option that needs some work using Hashtables :
var mapDictionary = {};
for(let index=0; index < numbers.length; index++) {
    mapDictionary[numbers[index]] = numbers[index];
}

for (var key in mapDictionary) {
    console.log(key);
}