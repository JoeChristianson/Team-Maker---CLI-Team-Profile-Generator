const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
    generateCard(){
        return this.generateGenericCard("Github",this.github,"glasses.png");
    }
}

module.exports = Engineer


const jeff = new Engineer("Jeff",111,"e@gmail.com","github.jeffrockstar.com")

console.log(jeff.generateCard())