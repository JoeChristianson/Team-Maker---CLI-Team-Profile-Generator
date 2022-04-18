const inq = require("inquirer");
const ListPrompt = require("inquirer/lib/prompts/list");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern")
const questions = require("./questions")
const generateHTML = require("./generateHTML")

const addNewTeammate = async (teammates)=>{
    const emp = await inq.prompt(questions.menu);
    if (emp.role==="none, team complete"){
        return;
    }
    // console.log(role.role)
    const otherProperties = await inq.prompt([...questions.employee,...questions[emp.role]]);
    for (let property in otherProperties){
        emp[property] = otherProperties[property];
    }
    let teammate;
    switch (emp.role){
        case "engineer":
            teammate = new Engineer(emp);
            break;
        case "manager":
            teammate = new Manager(emp);
            break;
        case "intern":
            teammate = new Intern(emp);
            break;
    }
    teammates.push(teammate)
    await addNewTeammate(teammates)
}

module.exports = addNewTeammate;