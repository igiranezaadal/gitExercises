class Person{
    public id: number
    public name: string
    constructor(id: number, name: string){
        this.id=id
        this.name=name
    }
}
const adal= new Person(1,"Igiraneza Adal")
const kalisa= new Person(2,"kalisa prince")
console.log(adal.name);
console.log(kalisa.id);
