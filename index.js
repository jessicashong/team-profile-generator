const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = []

// const person = new Employee();

//first employee to enter is Manager role
const managerQuestions = () => {
    inquirer.prompt([
        {
            message: "What is the team manager's name?",
            type: "input",
            name: "name",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter name.');
                    return false;
                }
            }
        },
        {
            message: "What is their employee ID?",
            type: "input",
            name: "id",
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please enter employee id.');
                    return false;
                }
            }
        },
        {
            message: "What is their email address?",
            type: "input",
            name: "email",
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter email.');
                    return false;
                }
            }
        },
        {
            message: "What is their office number?",
            type: "input",
            name: "officeNumber",
            validate: officeNumberInput => {
                if(officeNumberInput){
                    return true;
                } else {
                    console.log('Please enter the office number.');
                    return false;
                }
            }
        }
    ]).then(data => {
        console.log(data);
        const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
        team.push(manager)
        console.log(team);
        menu();
    })
}

//user will then select from menu options for next employee
const menu = () => {
    return inquirer.prompt([
        {
            message: 'Which profile would you like to create next?',
            type: 'list',
            choices: ['Engineer', 'Intern', 'Finished building team.'],
            name: 'menu'
        }
    ]).then(selected => {
        switch(selected.menu){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                buildTeam();
        }
    })    
}

//questions for engineer role
const engineerQuestions = () => {
    return inquirer.prompt([
        {
            message: "What is the engineer's name?",
            type: "input",
            name: "name",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter name.');
                    return false;
                }
            }
        },
        {
            message: "What is their employee ID?",
            type: "input",
            name: "id",
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please enter employee id.');
                    return false;
                }
            }
        },
        {
            message: "What is their email address?",
            type: "input",
            name: "email",
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter email.');
                    return false;
                }
            }
        },
        {
            message: "What is their GitHub username?",
            type: "input",
            name: "github",
            validate: githubInput => {
                if(githubInput){
                    return true;
                } else {
                    console.log('Please enter GitHub username.');
                    return false;
                }
            }
        }
    ]).then(data => {
        console.log(data);
        const engineer = new Engineer (data.name, data.id, data.email, data.github);
        team.push(engineer);
        console.log(team);
        menu();
    })
} 

//questions for intern role
const internQuestions = () => {
    return inquirer.prompt([
        {
            message: "What is the intern's name?",
            type: "input",
            name: "name",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter name.');
                    return false;
                }
            }
        },
        {
            message: "What is their employee ID?",
            type: "input",
            name: "id",
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please enter employee id.');
                    return false;
                }
            }
        },
        {
            message: "What is their email address?",
            type: "input",
            name: "email",
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter email.');
                    return false;
                }
            }
        },
        {
            message: "What is their school name?",
            type: "input",
            name: "school",
            validate: schoolName => {
                if(schoolName){
                    return true;
                }else {
                    console.log('Please enter school name.');
                    return false;
                }
            }
        }
    ]).then(data => {
        console.log(data);
        const intern = new Intern (data.name, data.id, data.email, data.school);
        team.push(intern);
        console.log(team);
        menu();
    })
} 
//after finish building team, generateTeam will create team html
const buildTeam = () => {
    console.log(team);
    const htmlContent = generateHTML(team);
    
    fs.writeFile('./dist/companyprofile.html', htmlContent, (err) =>
    err ? console.error(err) : console.log('Team profile complete!'));
}

//generate html of team profiles
const generateHTML = (team) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
        <link href="./style.css" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1 class="display-4 text-center p-2">My Team</h1>
        </header>

        <section>
            <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-center m-2">
                ${createTeamHtml(team)}
            
            </div>
            
        </section>

        <footer>

        </footer>
    </body>
    </html>`;


function createTeamHtml(team) {
    const html = [];
    //manager info
    const renderManager = member => {
        let managerHtml = 
        `<div class="col" style="max-width: 18rem">
        <div class="card-header bg-primary text-white text-capitalize">
        <p class="h5">${member.name}</p>
        <i class="bi bi-cup-hot"></i> Manager
        </div>
        <div class="card-body border" style="height:12rem">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.email}" target="_blank">${member.email}</a></li>
                <li class="list-group-item">Office number: ${member.officeNumber}</li>
            </ul>
        </div>
        </div>`
    
        html.push(managerHtml);
    }

    //engineer info
    const renderEngineer = engineer => {
        let engineerHtml = 
            `<div class="col" style="max-width: 18rem;">
            <div class="card-header bg-primary text-white text-capitalize">
            <p class="h5">${engineer.name}</p>
            <i class="bi bi-eyeglasses"></i> Engineer
            </div>
            <div class="card-body border" style="height:12rem">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></li>
                    <li class="list-group-item">Github Username: <a href="http://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                </ul>
            </div>
            </div>`

        html.push(engineerHtml);
    }
    
    //intern info
    const renderIntern = intern => {
        let internHtml = 
            `<div class="col" style="max-width: 18rem;">
            <div class="card-header bg-primary text-white text-capitalize">
            <p class="h5">${intern.name}</p>
            <i class="bi bi-mortarboard"></i> Intern
            </div>
            <div class="card-body border" style="height:12rem">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
            </div>`

        html.push(internHtml)
    }

    for(let i = 0; i < team.length; i++){
        let member = team[i];
        let role = member.getRole();
        if(role === 'Manager'){
            renderManager(member);
        }else if(role === 'Engineer'){
            renderEngineer(member);
        }else if(role === 'Intern'){
            renderIntern(member);
        }
    }
    return html.join('');
}







managerQuestions();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// THEN I exit the application, and the HTML is generated