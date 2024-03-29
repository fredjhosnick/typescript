"use strict";
//Type Aliases
//Literral types
let myName;
// myName = 'John'
myName = 'Dave';
let userName;
userName = 'Amy';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (messange) => {
    console.log(messange);
};
logMsg('Hello');
logMsg(add(2, 3));
let substrac = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 4));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest Parameter
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 4, 6, 8));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
