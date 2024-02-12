//Type Aliases

type stringOrNUmber = string | number

type stringOrNumberArray = (string | number)

type Guitarist = {
    name?:string,
    active:boolean,
    albums:(string | number)[]
}

type User_Id = stringOrNUmber

//Literral types
let myName:'Dave'
// myName = 'John'
myName = 'Dave'

let userName: 'Dave' | 'John' | 'Amy'

userName = 'Amy'

//functions

const add = (a: number, b: number):number =>{
    return a + b
}

const logMsg = (messange:any):void =>{
    console.log(messange)
}

logMsg('Hello')
logMsg(add(2,3))


let substrac = function(c:number,d:number){
    return c - d
}

// type mathFunction = (a:number,b:number) => number
interface mathFunction {
    (a:number, b:number):number
}

let multiply:mathFunction = function(c,d){
    return c * d
}

logMsg(multiply(2,4))

//optional parameters
const addAll = (a: number, b:number, c?: number):number =>{
      if(typeof c !== 'undefined'){
        return a + b + c
      }  return a + b 

}

const sumAll = (a: number = 10, b:number, c: number=2):number =>{
    return a + b + c

}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined,3))

//Rest Parameter

const total = (...nums:number[]):number =>{
    return nums.reduce((prev,curr) => prev + curr)
}

logMsg(total(2,4,6,8));


const createError = (errMsg:string):never =>{
    throw new Error(errMsg)
}

const infinite = () =>{
    let i:number = 1
    while(true){
        i++
        if(i>100) break
    }
}

//custom type guard
const isNumber = (value:any):boolean=>{
    return typeof value === 'number'?true:false
}

//use of the never type
const numberOrString = (value:number | string):
string =>{
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('This should never happen!')
}
