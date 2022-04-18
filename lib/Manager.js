const Employee = require("./Employee")

class Manager extends Employee{
    constructor({name,id,email,officeNumber}){
        super({name,id,email})
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    generateCard(){
        return this.generateGenericCard("Office Number",this.officeNumber,"coffee.png");
    }
}

module.exports = Manager

