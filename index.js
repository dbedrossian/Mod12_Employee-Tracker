var inquirer = require('inquirer');
const addDepartment = require('./Questions/addDepartment');
const addEmployee = require('./Questions/addEmployee');
const addRole = require('./Questions/addRole');
const startQuestion = require("./Questions/startQuestion");
const updateRole = require('./Questions/updateRole');
const connection = require('./db/connections');
const DB = require('./db/');
// const questions = require ('./Questions/')

const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// db.query('SELECT COUNT(id) AS deptName FROM department GROUP BY id', function (err, results) {
//   console.table(results);
// });

// DB.query('SELECT * FROM roles', function (err, results) {
//     console.log(results);
// });

// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

mainScreen()

function mainScreen() {
    inquirer.prompt(startQuestion())

        .then((responses) => {
            console.log(responses);
            if (responses.start === 'View all departments') {
                viewDepartments()
            }
            else if (responses.start === 'View all roles') {
                viewRoles()
            }
            else if (responses.start === 'View all employees') {
                viewEmployees()
            }
            else if (responses.start === 'Add a department') {
                inquirer.prompt(addDepartment()).then(deptName => {
                    var sql = `INSERT INTO department (deptName) VALUES ('${deptName.department}');`;
                    connection.promise().query(sql).then((err, data) => {
                        if (err) console.log(err);
                        mainScreen();
                    })
                })
            }
            else if (responses.start === 'Add a role') {
                var sql = `SELECT * FROM department`;
                connection.promise().query(sql).then((data) => {
                    let formattedData = data[0].map(department => {
                        return {
                            id: department.id,
                            name: department.deptName
                        }
                    })
                    inquirer.prompt(addRole(formattedData)).then(newRole => {
                        console.log(newRole);
                        let selectedId = formattedData.filter(data => data.name === newRole.roleDepartment)[0].id;
                        console.log(selectedId);
                        let query = `INSERT INTO roles (title, salary, department_id) VALUES ('${newRole.role}', ${newRole.salary}, ${selectedId});`;
                        connection.promise().query(query).then((err, data) => {
                            if (err) console.log(err);
                            mainScreen();
                        })

                    })
                })
            }
            else if (responses.start === 'Add an employee') {
                var sql = `SELECT * FROM roles`;
                connection.promise().query(sql).then((data) => {
                    let formattedData = data[0].map(roles => {
                        return {
                            id: roles.id,
                            name: roles.title
                        }
                    })
                    inquirer.prompt(addEmployee(formattedData)).then(newEmployee => {
                        let selectedId = formattedData.filter(data => data.name === newEmployee.employeeRole)[0].id;
                        let query = `INSERT INTO employee (first_name, last_name, manager_id) VALUES ('${newEmployee.firstName}', '${newEmployee.lastName}', ${selectedId});`;
                        connection.promise().query(query).then((err, data) => {
                            if (!err) console.log(err);
                            mainScreen();
                        })
                    })
                })
            }
            else if (responses.start === 'Update an employee role') {
                var sql = `SELECT * FROM employee`;
                console.log(sql);
                connection.promise().query(sql).then((data) => {
                    let formattedData = data[0].map(employee => {
                        return {
                            id: employee.id,
                            name: (`${employee.first_name} ${employee.last_name}`)
                        }                    })
                    inquirer.prompt(updateRole(formattedData)).then(newEmployee => {
                        console.log(newEmployee.name);

                // grab individual employee data {'John', 'Doe', 1, 2}

                // then ask another inquirer question "what do you want new role to be?"

                // capture that data for the new role (1,2,3,4)

                // then make SQL query of 'UPDATE employee SET role_id={result from inquirer} WHERE employee.first_name ='John' AND employee.last_name='Doe'





                        // let selectedId = formattedData.filter(data => data.name === newEmployee.employeeRole)[0].id;
                        // let query = `INSERT INTO employee (first_name, last_name, manager_id) VALUES ('${newEmployee.firstName}', '${newEmployee.lastName}', ${selectedId});`;
                        // connection.promise().query(query).then((err, data) => {
                        //     if (!err) console.log(err);
                        //     mainScreen();
                        // })

                    })
                })
            };
        });
};

function viewDepartments() {
    DB.findAllDepartments()
        .then((data) => {
            console.log(data);
            console.table(data[0]);
            mainScreen();
        })
};

function viewRoles() {
    DB.findAllRoles()
        .then((data) => {
            console.table(data[0]);
            mainScreen();
        })
};

function viewEmployees() {
    DB.findAllEmployees()
        .then((data) => {
            console.table(data[0]);
            mainScreen();
        })
};