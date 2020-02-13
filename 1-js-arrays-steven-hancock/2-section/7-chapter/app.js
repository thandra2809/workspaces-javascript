let array = [1, 2, 3, 4, true, "array", {one: 1}, [3, 5]];

console.log(array[9]);

console.log(!array[9]);

array[9]=NaN;

if (!array[9]) {
    console.log('This is Null or undefined');
} else {
    console.log('This has a value don\'t worry');
}