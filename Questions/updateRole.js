const updateRole = (employee, roles) =>
[
    {
        type: 'list',
        message: 'Select the employee',
        name: 'updateRole',
        choices: employee
    },
    {
        type: 'list',
        message: 'Select the new role',
        name: 'newRole',
        choices: roles
    }
];

module.exports = updateRole;