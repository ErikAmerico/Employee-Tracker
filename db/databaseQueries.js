const db = require('./databaseConnection')
//const menu = require('../index')

function viewAllDepartments(callback) {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err) throw err;
      console.table(results);
      //results.forEach(row => console.log(row));
      callback();
  });
}

function viewAllRoles(callback) {
  db.query('SELECT * FROM roles', (err, results) => {
    if (err) throw err;
      console.table(results);
      //results.forEach(row => console.log(row));
      callback();
  });
}

function viewAllEmployees(callback) {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;
      console.table(results);
      //results.forEach(row => console.log(row));
      callback();
  });
}

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
};