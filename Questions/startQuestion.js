const startQuestion = () =>
[
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'start',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee','Update an employee role']
    }
];

module.exports = startQuestion;