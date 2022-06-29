const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysqlDB',
  user: 'root',
  password: 'mydb13',
  database: 'testDB'
});

module.exports = pool;
