// generics allows you to wirte reuseable code that is not type specific like class,function,interface.
//     type parameter <T> 

// functions:
//     c reusablity
//     eliminate type casting(manually conversion of type)
//function generics
function identifyAny(arg: any):any {
    return arg ;
}
function identity<T>(arg:T){
    return arg;
}
const num = identity<number>(42)
const str = identity<string>('hi Adal')

// generic interface & classes

// function printVar<T>(val: T) {

// }
// printVar(val);

class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getValue(): T {
        return this.content;
    }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello");


// generics and constraints
interface hasLength{length:number;}
function logLength<T extends hasLength>(arg: T){
    console.log(arg.length);
    return arg;
}
logLength('hello Adal')
logLength([1,2])