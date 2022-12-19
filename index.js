var inquirer = require('inquirer');
const addDepartment = require('./Questions/addDepartment');
const addEmployee = require('./Questions/addEmployee');
const addRole = require('./Questions/addRole');
const startQuestion = require("./Questions/startQuestion");
const updateRole = require('./Questions/updateRole');

const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Kauai2022',
    database: 'employeeTracker_db'
  },
//   console.log(`Connected to the employeeTracker_db database.`)
);


// db.query('SELECT COUNT(id) AS deptName FROM department GROUP BY id', function (err, results) {
//   console.table(results);
// });

// db.query('SELECT ** FROM roles', function (err, results) {
//     console.log(results);
// });

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

inquirer.prompt(startQuestion())

    .then((responses) => {
        if (responses.start === 'View all departments') {
            console.log('view the depts');
            db.query('SELECT * FROM department', (req, res) => {
                console.table(res);
              })
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