class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(`Their name is ${this.name}`)
    }
    getId(){
        console.log(`Their id is ${this.id}`)
    }
    getEmail(){
        console.log(`Their email is ${this.email}`)
    }
}

const jeff = new Employee(name,id,email);
