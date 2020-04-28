const start = [{
    type: "list",
    name: "choice",
    message: "What's your title?",
    choices: ["Manager", "Engineer", "Intern", "Exit"]
}];

const manager = [{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your officeNumber?"
    }
];

const engineer = [{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github?"
    }
];

const intern = [{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is your school?"
    }
];

module.exports = {
    start,
    manager,
    engineer,
    intern
};
