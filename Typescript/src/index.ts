// const message: string = "TypeScript setup is working perfectly!";
// console.log(message);
console.log('hello Adal');


// codewars
 function noSpace(x:string):string {
    // let result = x.replace(/\s/g, '');
    let result = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== ' ') {
            result += x[i];
        }
    }
    return result;
}
console.log(noSpace("hell Adal"));