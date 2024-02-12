"use strict";
let stringArr = ['one', 'two', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
// guitars =  stringArr;
// mixedData = guitars
let test = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
mixed = myTuple;
myTuple[1] = 42;
//objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObj = {
    prop1: 'John',
    prop2: 'true'
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    // if(guitarist.name){
    //     return `Hello ${guitarist.name.toUpperCase()}!`
    // }
    // return 'No Exist'
};
console.log(greetGuitarist(jp));
//Enums
var Gerade;
(function (Gerade) {
    Gerade[Gerade["U"] = 0] = "U";
    Gerade[Gerade["D"] = 1] = "D";
    Gerade[Gerade["C"] = 2] = "C";
    Gerade[Gerade["B"] = 3] = "B";
    Gerade[Gerade["A"] = 4] = "A";
})(Gerade || (Gerade = {}));
console.log(Gerade.U);
