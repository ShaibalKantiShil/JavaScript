// How do you find duplicate numbers in an array if it contains multiple duplicates?

var numbers = [0, 0 , 1, 2, 2, 3, 4, 4, 5, 6, 6, 2, 6, 6, 4];
var duplicates = {};

numbers.forEach((number)=> {
    if( (numbers.indexOf(number) !== numbers.lastIndexOf(number)) )  {
            if (! duplicates[number] ) {
                duplicates[number] = 1;
            } else {
                duplicates[number] = duplicates[number] + 1;
            }
    }
});

for (var key in duplicates) {
    console.log('Number: ' + key + ', Duplicate Count: ' + duplicates[key]);
}