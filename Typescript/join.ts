
// Public class Person {
//   name: string;
// }

// const person = new Person();
// person.name = "Jane";

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName()); // no error
// console.log(person.name) // cant accsess private accesss modifireer