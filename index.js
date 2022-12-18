var inquirer = require('inquirer');
const addDepartment = require('./Questions/addDepartment');
const addEmployee = require('./Questions/addEmployee');
const addRole = require('./Questions/addRole');
const startQuestion = require("./Questions/startQuestion");
const updateRole = require('./Questions/updateRole');

inquirer.prompt(startQuestion())

    .then((responses) => {
        if (responses.start === 'View all departments') {
            console.table (departments)
        }
        else if (responses.start === 'View all roles') {
            console.table (roles)
        }
        else if (responses.start === 'View all employees') {
            console.table (employees)
        }
        else if (responses.start === 'Add a department') {
            inquirer.prompt(addDepartment())
        }
        else if (responses.start === 'Add a role') {
            inquirer.prompt(addRole())
        }
        else if (responses.start === 'Add an employee') {
            inquirer.prompt(addEmployee())
        }
        else if (responses.start === 'Update an employee role') {
            inquirer.prompt(updateRole())
        };
    });