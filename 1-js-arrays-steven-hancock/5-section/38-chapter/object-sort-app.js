let arrayOfObjects = [{firstName: 'Srini', lastName: 'Thandra', score: 90},
    {firstName: 'Priya', lastName: 'Thandra', score: 80},
    {firstName: 'Shreyus', lastName: 'Thandra', score: 100},
    {firstName: 'Shravan', lastName: 'Gadeela', score: 75},
    {firstName: 'Nikhila', lastName: 'Lopelly', score: 85},
    {firstName: 'Preethi', lastName: 'Lopelly', score: 100}]

arrayOfObjects.sort((a, b) => {
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
    return 0;
});

console.log('***********************************');
console.log(arrayOfObjects);
console.log('***********************************');

arrayOfObjects.sort((a, b) => {
    return (a.score - b.score);
});

console.log('***********************************');
console.log(arrayOfObjects);
console.log('***********************************');