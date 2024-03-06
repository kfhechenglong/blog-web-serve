const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'he19880828',
  database: 'weibo'
});
connection.query('SELECT * FROM user', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }

  console.log('Query results:', results);
});
