// Class:is a blue print to create an object 

// class Point{
//     x: number;
//     y:number;
//     draw:(){
//         //..
//         console.log('draw');
        
//     }

//     getDistance(another:point)=>{
//         //..
//         console.log('get Distance');

//     }
// }

// let drawPoint= (point: Point)=>{
//     //...
// }

// let getDistance= (pointA: Point,pointB: Point)=>{
//     //...
// }
// drawPoint({
//     x:1,
//     y:2 
// })

// access modifier in typescript


// Public class Person {
//   name: string;
// }

// const person = new Person();
// person.name = "Jane";

// class Person {
//   private name: string;

//   public constructor(name: string) {
//     this.name = name;
//   }

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// console.log(`Your name is: ${person.getName()}`); // no error
// console.log(person.name) // cant accsess private accesss modifirer


class Point{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y; 
    }

    draw(){
        console.log('X: '+ this.x + 'Y: '+ this.y);
        
    }
}

let point= new Point(1, 2);
console.log(point.x=3);
console.log(point.draw());
