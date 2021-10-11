// How do you find the duplicate number on a given integer array
// https://stackoverflow.com/questions/19655975/check-if-an-array-contains-duplicate-values/42813534

var numbers = [1,2,3,4,4];
if (numbers.length === new Set(numbers).size) {
    console.log('The array has unique numbers');
} else {
    console.log('The array has duplicates');
    var duplicates = [];
    numbers.forEach(number => {
        if( (numbers.indexOf(number) !== numbers.lastIndexOf(number)) && (duplicates.indexOf(number) === -1)) {
            duplicates.push(number);
        }
    });

    console.log('Duplicates: ' + duplicates);
}