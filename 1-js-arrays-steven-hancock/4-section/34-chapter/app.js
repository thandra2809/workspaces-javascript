let obj = {
    1: 'one',
    2: 'two',
    3: 'three'
};

let str = "String";

const isArraLike = (collection) => {
    return collection != null && typeof collection[Symbol.iterator] === 'function';
}

console.log(isArraLike(str));

console.log(isArraLike(obj));