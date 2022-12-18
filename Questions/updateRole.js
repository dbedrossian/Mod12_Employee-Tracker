const updateRole = () =>
[
    {
        type: 'list',
        message: 'Select the employee',
        name: 'updateRole',
        choices: 'dynamic'
    },
    {
        type: 'list',
        message: 'Select the new role',
        name: 'newRole',
        choices: 'dynamic'
    }
];

module.exports = updateRole;