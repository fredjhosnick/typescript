class Coder {
    // name:string
    // music:string
    // age:number
    // lang:string


    constructor(
        public readonly name:string,
        public music:string,
        private age:number,
        protected lang:string = 'TypeScript'
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    public getAge(){
        return `Hello, I'm ${this.age}`
    }
}

const Fred = new Coder('Fred','Rock', 42)
console.log(Fred.getAge())
// console.log(Fred.age)
// console.log(Fred.lang)


class WebDev extends Coder{
    constructor(
        public computer: string,
        name:string,
        music:string,
        age:number,

    ){
        super(name, music,age)
        this.computer = computer
    }
    public getLang(){
        return `I write ${this.lang}`
    }
}

const Pedro = new WebDev('Mac','Sara', 'Lofi',25)

// console.log(Pedro.getLang())
// console.log(Pedro.name)
// console.log(Pedro.music)
// console.log(Pedro.age)

interface Musican{
    name:string,
    instrument:string,
    play(action:string):string
}

class Guitarist implements Musican{
    name:string
    instrument:string
    constructor(name:string, instrument:string){
        this.name = name
        this.instrument = instrument

    }
    play(action:string){
        return `${this.name} ${action} the ${this.instrument}`
    }
    
}

const Page = new Guitarist('Jimmy', 'guita')

console.log(Page.play('strums'))

/////////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount():number{
        return Peeps.count
    }

    public id:number

    constructor(public name:string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Mario = new Peeps('Mario')

console.log(Mario.id)
console.log(Steve.id)
console.log(John.id)

console.log(Peeps.count)


/////////////////////////////////////////////////

class Bands {
    private dataState: string[]
    constructor(){
        this.dataState =[]
    }
    public get data():string[]{
        return this.dataState
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return
        }else throw new Error('Param is not an array of string')
    }
}

const myBand  = new Bands()
myBand.data =['Neil Young', 'Led Zep']
console.log(myBand.data)
myBand.data = [...myBand.data, 'ZZ top']
console.log(myBand.data)