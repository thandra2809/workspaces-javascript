let sumIt = function () {
    console.log(arguments);

    console.log(Array.isArray(arguments));

    let numsArray = Array.from(arguments);

    console.log(numsArray);

};

sumIt(2, 3, 4, 5, 6, 7)