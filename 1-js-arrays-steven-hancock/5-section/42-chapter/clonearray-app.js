let stringArray = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];

/**
 let clonedStringArray = stringArray;
 clonedStringArray.sort();
 */

let clonedStringArraySorted = [...stringArray];
clonedStringArraySorted.sort();

console.log(stringArray);
console.log(clonedStringArraySorted);

/* we can use Array.from as well ... this will clone as well */