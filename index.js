const inq = require("inquirer");
const questions = require("./src/questions")
const generateHTML = require("./src/generateHTML")
const addNewTeammate = require("./src/addNewTeammate")
const writeHTML = require("./src/writeHTML.js")

const app = async ()=>{
    const teammates = [];
    const project = await inq.prompt(questions.projectName)
    await addNewTeammate(teammates);
    const html = generateHTML(project.projectName,teammates);
    console.log(html)
    writeHTML(html)
}

app()