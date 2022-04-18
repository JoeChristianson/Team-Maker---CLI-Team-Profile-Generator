const questions = {
    projectName:[{
        type:"input",
        message:"What is the name of your project?",
        name:"projectName"
    }],
    menu:[{
        type: 'list',
        message: 'What role do you wish to add to the team?',
        name:"role",
        choices: ["manager","engineer","intern","none, team complete"]
    }],
    employee:[
        {
            type:"input",
            name:"name",
            message:"What is their name?",
        },
        {
            type:"input",
            name:"id",
            message:"What is their ID?",
        },
        {
            type:"input",
            name:"email",
            message:"What is their email?"
        }
    ],
    manager:[
        {
            type:"input",
            name:"officeNumber",
            message:"What is their office number?",
        },
    ],
    engineer:[
        {
            type:"input",
            name:"github",
            message:"What is their github url?"
        }
    ],
    intern:[
        {
            type:"input",
            name:"school",
            message:"What is their school?"
        }
    ]
}

module.exports = questions;