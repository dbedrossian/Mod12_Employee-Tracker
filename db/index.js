const connection = require('./connections');

class DB {
    constructor (connection) {
        this.connection = connection
    };
    findAllDepartments () {
        return this.connection
        .promise()
        .query('SELECT * FROM department')
    };
    findAllRoles () {
        return this.connection
        .promise()
        .query('SELECT roles.id, roles.title, roles.salary FROM roles')
    };
    findAllEmployees () {
        return this.connection
        .promise()
        .query('SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, roles.salary, roles.title, department.deptName FROM employee LEFT JOIN roles ON (roles.id = employee.role_id) LEFT JOIN department ON (roles.department_id = department.id)')
    };
}

module.exports = new DB(connection);