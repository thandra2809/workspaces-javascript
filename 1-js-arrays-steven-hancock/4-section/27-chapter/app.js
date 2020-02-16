let str = "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, and object oriented--and blend them as appropriate.";


let str2 = "";

for (let value of str) {
    if (value === 'j') {
        str2 += value.toUpperCase();
    } else {
        str2 += value;
    }
}

console.log(str2);

let str3 = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
        str3 += str[i].toUpperCase();
    } else {
        str3 += str[i];
    }
}

console.log(str3);

