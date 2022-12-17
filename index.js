const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

const person = new Employee();

const managerQuestions = [
    {
        message: "What is the team manager's name?",
        type: "input",
        name: "managerName"
    },
    {
        message: "What is their employee ID?",
        type: "input",
        name: "id"
    },
    {
        message: "What is their email address?",
        type: "input",
        name: "email"
    },
    {
        message: "What is their office number?",
        type: "input",
        name: "officeNumber"
    }
]
const engineerQuestions = [
    {
        message: "What is the engineer's name?",
        type: "input",
        name: "managerName"
    },
    {
        message: "What is their employee ID?",
        type: "input",
        name: "id"
    },
    {
        message: "What is their email address?",
        type: "input",
        name: "email"
    },
    {
        message: "What is their GitHub username?",
        type: "input",
        name: "github"
    }
]
const internQuestions = [
    {
        message: "What is the engineer's name?",
        type: "input",
        name: "managerName"
    },
    {
        message: "What is their employee ID?",
        type: "input",
        name: "id"
    },
    {
        message: "What is their email address?",
        type: "input",
        name: "email"
    },
    {
        message: "What is their school name?",
        type: "input",
        name: "school"
    }
];
const menu = [
    {
        message: 'Which profile would you like to create next?',
        type: 'list',
        choices: ['Engineer', 'Intern', 'Finished building team.'],
        name: 'newEmployee'
    }
]

// const renderManager = (data) => {
//     console.log(data);
//     // let managerInfo = generateCard(data)

//     //fs.writeFile('./dist/companyprofile.html', managerInfo, (err) =>
//     // err ? console.error(err) : console.log('manager complete'));
//     // inquirer.prompt(menu);
// }

//function will render engineer data
// const renderEngineer = (data) => {
//     console.log(data);
//     // let engineerInfor = generateCard(data)

//     //fs.appendFile('./dist/companyprofile.html', engineerInfo, (err) =>
//     // err ? console.error(err) : console.log('manager complete'));
//     // inquirer.prompt(menu);
// }

//function will render intern data
// const renderIntern = (data) => {
//     console.log(data);
//     // let internInfo = generateCard(data)

//     //fs.writeFile('./dist/companyprofile.html', managerInfo, (err) =>
//     // err ? console.error(err) : console.log('manager complete'));
//     // inquirer.prompt(menu);
// }
    
//generateCard()
//w template literal for employee card--use bootstrap or tailwind for styling

const generateHTML = (data) =>
``


//function to initialize application
//const init = () => {
//     inquirer.createPromptModule(managerQuestions)
//         .then() <-- add writeFile function
// }
//init();