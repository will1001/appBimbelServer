const mysql = require('mysql');


//create database connection
module.exports = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b170b9ca68e75d',
  password: '086086f6',
  database: 'heroku_b079c8c9acac9cb'
});

