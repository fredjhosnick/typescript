"use strict";
class Coder {
    // name:string
    // music:string
    // age:number
    // lang:string
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Fred = new Coder('Fred', 'Rock', 42);
console.log(Fred.getAge());
// console.log(Fred.age)
// console.log(Fred.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Pedro = new WebDev('Mac', 'Sara', 'Lofi', 25);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guita');
console.log(Page.play('strums'));
/////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Mario = new Peeps('Mario');
console.log(Mario.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
/////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of string');
    }
}
const myBand = new Bands();
myBand.data = ['Neil Young', 'Led Zep'];
console.log(myBand.data);
myBand.data = [...myBand.data, 'ZZ top'];
console.log(myBand.data);
