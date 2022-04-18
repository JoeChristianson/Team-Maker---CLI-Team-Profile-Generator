const Employee = require("./Employee")

class Engineer extends Employee{
    constructor({name,id,email,github}){
        super({name,id,email})
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
    generateCard(){
        return this.generateGenericCard("Github",`<a href="${this.github}">GitHub</a>`,"glasses.png");
    }
}

module.exports = Engineer
