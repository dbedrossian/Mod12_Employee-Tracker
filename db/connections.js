const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: 'Kauai2022',
      database: 'employeeTracker_db'
    },
  //   console.log(`Connected to the employeeTracker_db database.`)
  );

  module.exports = connection;