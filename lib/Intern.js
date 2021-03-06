const Employee = require("./Employee")

class Intern extends Employee{
    constructor({name,id,email,school}){
        super({name,id,email})
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
    generateCard(){
        return this.generateGenericCard("School",this.school,"graduate.png");
    }
}

module.exports = Intern

