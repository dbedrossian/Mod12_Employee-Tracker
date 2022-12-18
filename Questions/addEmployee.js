const addEmployee = (roles, managers) =>
[
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'firstName'
    },
    {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'lastName'
    },
    {
        type: 'list',
        message: "What is the employee's role?",
        name: 'employeeRole',
        // choices: 'dynamic'
    },
    {
        type: 'list',
        message: "Who is the employee's manager?",
        name: 'manager',
        // choices: 'dynamic'
    },
]

module.exports = addEmployee;