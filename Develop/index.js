const inquirer = require('inquirer');
createManager()
function createManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'what is your manager name? '
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is your manager id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your manager email ?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'what is your office number ?'
        }
    ]).then(answer => {
        console.log(answer)
    })
};
