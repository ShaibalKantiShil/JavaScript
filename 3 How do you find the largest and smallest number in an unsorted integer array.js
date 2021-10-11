// 3 How do you find the largest and smallest number in an unsorted integer array
// slice():
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://stackoverflow.com/questions/38256170/find-the-smallest-and-largest-value-in-an-array-with-javascript

var numbers = [44, 4, 444, 333, 3, 33];

var shallowSorted = numbers.slice().sort( (first, next) => { return first-next; } );

console.log(shallowSorted[0]);
console.log(shallowSorted[1]);
console.log(shallowSorted[numbers.length - 2]);
console.log(shallowSorted[numbers.length - 1]);