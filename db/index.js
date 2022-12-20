const connection = require('./connections');

class DB {
    constructor (connection) {
        this.connection = connection
    };
    findAllDepartments () {
        return this.connection
        .promise()
        .query('SELECT department.id, department.deptName FROM department')
    };
}

module.exports = new DB(connection);