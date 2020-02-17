let stringArray = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
let mixedStringArray = ["Steven", "Mary", "Simone", "ari", "MvKay", "James"];
let numberArray = [15, -10, 500, 43, -25, 0, 23, 112]

console.log(stringArray.sort());
console.log(mixedStringArray.sort());
console.log(numberArray.sort());

let compareNumbers = function (a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

console.log('***********************************');
console.log(numberArray.sort(compareNumbers));
console.log('***********************************');


let compareStrings = function (a, b) {
    let x = a.toLowerCase();
    let y = b.toLowerCase();

    if (x < y) return -1;
    if (x > y) return 1;

    return 0;

}

console.log('***********************************');
console.log(stringArray.sort(compareStrings));
console.log('***********************************');

console.log('***********************************');
console.log(mixedStringArray.sort(compareStrings));
console.log('***********************************');