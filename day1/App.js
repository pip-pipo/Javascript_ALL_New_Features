// you will learn all new features of JavaScript ES7 and ES8. Some of which include: padStart/padEnd, object.values, object.entries, trailing commas, async functions and much more!

//  Es7 and Es8 Features

// tools i used Quokka.js extention in vscode  for see live console.log 

//  padStart() and padEnd() return string
const string = "string"

console.log(string.padStart(9, '.')); //...string
console.log(string.padEnd(9, '.'));//string...



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
// ** means power
// will show same output
console.log(Math.pow(5,2)); //25
console.log(5 ** 2); //25

// Trailing commas

const arr = [2,3,,,5,4,5,4,54,54,5,]

console.log(arr.length); //11
console.log(arr[2]); //undefined


// summery 

const objectData ={
    first:'morsalin',
    last:'@',
    domain:'gmail',
    dot:'.',
    com:['com','in','xyz','org'],
}

console.log(objectData.first.length);
const objentitis = Object.entries(objectData);


for(let i = 0;i<5;i++){
    console.log(objentitis[i][1]);

    const data = objentitis[i]
    console.log(data[1])
}



for (keys in objectData){
    console.log(keys);
}

// current value //morslain
const datas = objData?.user1?.nmae

// update value //['m','o','r','s',.....]
var v = console.log(datas.split(''))
 
// it still value //morslain
console.log(datas)

//if clg(v)
console.log(v) //undefined


const splitdata = datas.split('')
console.log(splitdata.toString())


const makeString = splitdata.toString()

console.log(makeString.padEnd(9,'.')); // not working

const makepadEnd = 'mmmmm'

console.log(makepadEnd.padStart(9,'.')); //working //...mmmmm

console.log(makeString.replace(",",'$o@s4,i=*4')); //m$0@s4,i=*40.......
