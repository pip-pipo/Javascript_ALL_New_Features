// you will learn all new features of JavaScript ES7 and ES8. Some of which include: padStart/padEnd, object.values, object.entries, trailing commas, async functions and much more!

//  Es7 and Es8 Features

//  padStart() and padEnd() return string
const string = "string"

console.log(string.padStart(9, '.'));
console.log(string.padEnd(9, '.'));



// Object.values()  return array of any
const ob1 = { name: 'morsalin', roll: 4, age: 17 }
const obj = { imran: ['naem', 'kdfm', 'dkfjk'] }

console.log(Object.values(obj));
console.log(Object.values(ob1));



// Object.entries() return array of any
const objData = {
    user1:{
        nmae:'morsalin',
        roll:3,
        age:16,
        hobby:'programming',
    },
    user2:{
        nmae:'rony',
        roll:6,
        age:18,
        hobby:'football',
    },
    user3:{
        nmae:'rasle',
        roll:4,
        age:28,
        hobby:'reading book',
    },
}


console.log(Object.entries(objData));


// .toExponential()
console.log(Number.parseFloat(3).toExponential(3));


// Exponential
// ** means pow
// will show same output
console.log(Math.pow(5,2));
console.log(5 ** 2);