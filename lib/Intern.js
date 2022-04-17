const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern


const jeff = new Intern("Jeff",111,"e@gmail.com","Michigan State")

console.log(jeff.getName())
console.log(jeff.getId())
console.log(jeff.getEmail())
console.log(jeff.getRole())
console.log(jeff.getSchool())