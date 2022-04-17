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
}

module.exports = Engineer


const jeff = new Engineer("Jeff",111,"e@gmail.com","github.jeffrockstar.com")

console.log(jeff.getName())
console.log(jeff.getId())
console.log(jeff.getEmail())
console.log(jeff.getRole())
console.log(jeff.getGithub())