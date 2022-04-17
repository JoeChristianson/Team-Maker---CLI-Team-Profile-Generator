const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager


const jeff = new Manager("Jeff",111,"e@gmail.com",34)

console.log(jeff.getName())
console.log(jeff.getId())
console.log(jeff.getEmail())
console.log(jeff.getRole())