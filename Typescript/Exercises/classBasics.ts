class Person{
    private id: number; // private is only accccessible inside the class
    //protected can be accessed in derivered class (ralated)
    public name: string
    constructor(id: number, name: string){
        this.id=id;
        this.name=name;
    }
    public getId(){
        return this.id,this.name
    }
}
const obj= new Person(1,"Igiraneza Adal")
const obj1= new Person(2,"kalisa prince")
// console.log(adal.name);
console.log(obj.getId());
