
let array = [];

array.push(1);
array.push('Test');
array.push(true);
array.push('');
array.push("This is Shreyus");
array.push(7);
array.push(8);

console.log(array);

const testArray = array.filter((element)=>{ return element});

console.log(testArray);
