// let value: any = "This is a string";
// let lengthOfString: number = (value as string).length;

// console.log(lengthOfString);


// // async
// interface User {
//     id: number;
//     username: string;
// }
// const data = await response.json();
// const user = data as User;
// console.log(user)

// let age = "2004" as number;
// const birth = ("25" as unknown) as number;
// const colors = ["red", "blue"] as const;
// console.log(birth)
// console.log(colors)

// var n: number=5
// while(n>5){
//     console.log("enter while");
// }

// do{
//     console.log(`entered dowhile`);  
// }
// while(n>5)


// function assertionFunc(): any {
//     return 'Hello, Typescript';
// }
// let strLength: number = (assertionFunc() as string).length;
// console.log(strLength)

// optional chaining
type Customer={
    birthday: Date
}
function getCustomer (id: number): Customer | null | undefined {
 return id ===0? null: { birthday: new Date() };
}
let customer = getCustomer(1);

console.log(`date is: ${customer?.birthday}`);