let stringArr = ['one', 'two', 'Dave']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH',1984, true]

stringArr[0] = 'John'
stringArr.push('hey')
guitars[0]= 1984
guitars.unshift('Jim')

// guitars =  stringArr;
// mixedData = guitars

let test = []
let bands: string[]= []
bands.push('Van Halen')

//Tuple
let myTuple:[string,number,boolean] = ['Dave', 42, true]
let mixed = ['John', 1, false]

mixed = myTuple

myTuple[1] = 42 

//objects

let myObject: object
myObject = []
console.log(typeof myObject)
myObject = bands
myObject = {}


const exampleObj = {
    prop1:'John',
    prop2:'true'
}

exampleObj.prop1 = 'John'

interface Guitarist {
    name?:string,
    active:boolean,
    albums:(string | number)[]
}

let evh: Guitarist = {
    name:'Eddie',
    active: false,
    albums:[1984,5150,'OU812']
}

let jp: Guitarist = {
    name:'Jimmy',
    active: true,
    albums:['I','II','IV']
}

const greetGuitarist = (guitarist:Guitarist)=>{
    return `Hello ${guitarist.name?.toUpperCase()}!`
    // if(guitarist.name){
    //     return `Hello ${guitarist.name.toUpperCase()}!`
    // }
    // return 'No Exist'

}

console.log(greetGuitarist(jp))


//Enums

enum Gerade{
    U,
    D,
    C,
    B,
    A,
}
console.log(Gerade.U)