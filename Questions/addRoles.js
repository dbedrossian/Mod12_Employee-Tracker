const addRole = 
[
    {
        type: 'input',
        message: "What is the name of the role?",
        name: 'role'
    },
    {
        type: 'input',
        message: "What is the salary for the role?",
        name: 'salary'
    },
    {
        type: 'list',
        message: "What is the department?",
        name: 'roleDepartment',
        // choices: 'dynamic'
    },
]

module.exports = addRole;