//const Employee = require('./lib/Employee');
//const Manager = require('./lib/Manager');
//const Intern = require('./lib/Intern');
//const Engineer = require('./lib/Engineer');

//const path = require("path");
//const fs = require("fs");
//const writeFileAsync = util.promisify(fs.writeFile);
//const open = require('open')
​
//onst OUTPUT_DIR = path.resolve(__dirname, "output")
//const outputPath = path.join(OUTPUT_DIR, "team.html");
​
//const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
const inquirer = require('inquirer');
const team = [];
const idList = [];

//const util = require('util');
//const fs = require('fs');

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
//const list = [];
/*

createEmployee()
function createEmployee(){
    promptUser().then(function(value){
        let ne = new Employee(value.name, value.id, value.email)
        if (value.role==='Manager'){
            promptManager().then(function(value){
                let ma = new Manager(ne.name, ne.id, ne.email, ne.officeNumber);
                list.push(ma)
                if(value.anotherEmployee=== true){
                    createEmployee()
                }
                else{
                    RoleHTML()
                }
            })
        }
        else if (value.role==='Intern'){
            promptIntern().then(function(value){
                let i = new Intern(ne.name, ne.id, ne.email, value.school)
                list.push(i)
                if(value.anotherEmployee=== true){
                    createEmployee()
                }
                else{
                    RoleHTML()
                }
            
            })
        }

    })
}
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'

        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?',

        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email ?',
            validate: value.includes("@")&& includes(".com") ? true : 'Sorry, your email is not valid'

        },
        {
            type: 'list',
            name: 'role',
            message: 'what do you want to be in a company?',
            choices: ['Manager', 'Engineer', 'Intern', 'Office assistant']

        }
    ])
    
}
function promptIntern(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school that you go to?',

        },
        {
            type: 'confirm',
            name: 'anotherEmployee',
            message: 'Do you want to add another employee?',
        },
        
    ])
}
function promptEngineer(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'what is your github?'
        },
        {
            type: 'confirm',
            name: 'anotherEmployee',
            message: 'Do you want to add another employee?',
        },
       
    ])
}
function RoleHTML(){
    const employees = '';
    list.forEach(function(employee){
        if (employee.officeNumber){
            employees += ManagerHTML(employee);

        }
        else if (employee.school){
            employees += InternHTML(employee);
        }
        else {
            employees += EngineerHTML(employee)
        }
    })
    let HTML = MainHTML(employees)
    return writeFileAsync("team.html", HTML)
    .then(function(){
        open("team.html")
    })
}
promptEngineer();
*/
createManager()
function createManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'what is your manager name? ',
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is your manager id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your manager email ?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'what is your office number ?'
        }
    ]).then(answer => {
        console.log(answer)
        const Manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        team.push(Manager);
        idList.push(answer.id)
        buildTeam()
    }

​)};

