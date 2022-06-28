const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'SUASENHA',
  port: 3306,
});

module.exports = db;