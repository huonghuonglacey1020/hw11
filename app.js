
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "OUTPUT");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer.js");

// let name;
// let role;
// let id;
// let github;
// let email;
// let officeNumber;
// let school;
// const Employees = []
// const main = () => {
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: "Employee role",
//             message: "what do you do in the company ?",
//             choices: ["Engineer", "Intern", "Manager", "Exit"]
//         }
//     ])
//         .then(next => {
//             role = next["Employee Role"]
//             createManager()

//         });
// }

// function createManager() {
//     switch (role) {
//         case "Manager":
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     name: 'managerName',
//                     message: 'what is your manager name? ',
//                 },
//                 {
//                     type: 'input',
//                     name: 'id',
//                     message: 'what is your manager id?',
//                 },
//                 {
//                     type: 'input',
//                     name: 'email',
//                     message: 'what is your manager email ?',
//                 },
//                 {
//                     type: 'input',
//                     name: 'officeNumber',
//                     message: 'what is your office number ?'
//                 }
//             ]).then(answer => {
//                 console.log(answer)
//                 const Manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
//                 team.push(Manager);
//                 idList.push(answer.id);
//                 allRole();

//             });
//             break;
//         case "Engineer":
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     name: 'github useer',
//                     message: 'what is your github name ?'

//                 }
//             ])
//                 .then(E => {
//                     github = E['github usename'];
//                     allRole()
//                 })
//             break;
//         case "Intern":
//             inquirer.prompt([
//                 {
//                     name: 'school',
//                     type: 'input',
//                     message: 'what school did you study?'

//                 }
//             ]).then(college, university => {
//                 school = university['school'];
//                 allRole()

//             });
//             break;
//         case "Exit":
//             render(employees)
//             renderToFile();


//     };

// }
// const allRole = () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "Employee Name",
//             message: "What is the employee name?"
//         },
//         {
//             type: 'input',
//             name: "id",
//             message: "what is your id number ?",
//             validate: function(val){
//                 const valid = !isNaN(parseFloat(val));
//                 return valid || "Enter id number"
//             },
//         },
//             {
//                 type: 'email',
//                 name: 'your email',
//                 message: 'what is your email ?'
//             }

    
//     ]).then (answers=>{
//         name =answers['Employee name'];
//         id= answer['Employee id'];
//         email=['Employee email']
//         addEm()
//     })
// };
// const addEm = () =>{
//     switch (role) {
//         case "Engineer":
//           employees.push(new Engineer(name, id, email, github));
//           main();
//           break;
    
//         case "Intern":
//           employees.push(new Intern(name, id, email, school));
//           main();
//           break;
    
//         case "Manager":
//           employees.push(new Manager(name, id, email, officeNumber));
//           main();
//           break;
//       }
//     };
    
//     const renderToFile = () => {
//       fs.writeFile("./output/team.html", render(Employees), "utf8", err => {
//         if (err) {
//           console.log(err);
//         }
//         return;
//       });
//     };
// main();
// module.exports = Employees;
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./lib/questions");
const generateHTML = require("./lib/generateHTML");

var employeeHTML = (``);

init()

function init() {
    inquirer.prompt(questions.start)
        .then(function(data) {
            if (data.choice === "Manager") {
                getManager();
            } else if (data.choice === "Engineer") {
                getEngineer();
            } else if (data.choice === "Intern") {
                getIntern();
            } else if (data.choice === "Exit") {
                fileGenerator();
            }
        })
};

function getManager() {
    console.log("Save Manager!")
    inquirer.prompt(questions.manager)
        .then((res) => {
            //console.log(res);
            const managerData = new Manager(res.name,
                res.id,
                res.email,
                res.officeNumber
            );
            //console.log(managerData);
            var managerEl = generateHTML.generateManagerHTML(managerData);
            employeeHTML = employeeHTML + managerEl;
            //console.log(employeeHTML);
            init();
        }).catch(function(error) {
            console.log(error);
        })
};


function getEngineer() {
    console.log("Editing Engineer!")
    inquirer.prompt(questions.engineer)
        .then((res) => {
            console.log(res);
            const engineerData = new Engineer(res.name,
                res.id,
                res.email,
                res.github
            );
            
            var engineerEl = generateHTML.generateEngineerHTML(engineerData);
            employeeHTML = employeeHTML + engineerEl;
            
            init();
        }).catch(function(error) {
            console.log(error);
        })

};

function getIntern() {
    console.log("Editing Intern!")
    inquirer.prompt(questions.intern)
        .then((res) => {
          
            const internData = new Intern(res.name,
                res.id,
                res.email,
                res.school
            );
            
            var internEl = generateHTML.generateInternHTML(internData);
            employeeHTML = employeeHTML + internEl;
            
            init();
        }).catch(function(error) {
            console.log(error);
        })

};

function fileGenerator() {
    const mainEl = generateHTML.generateMainHTML(employeeHTML);
    console.log("Generating...");
    fs.writeFile("./output/team.html", mainEl, function(err) {
        if (err) {
            return console.log(err)
        }
        console.log("HTML file generated");
    });
};



