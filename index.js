const inquirer = require('inquirer');
//const db = require('./db/databaseConnection')
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./db/databaseQueries');


const menu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'options',
        message: 'Select what you would like to do:',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
        pageSize: 10,
      },
    ])
    .then(answer => {
      switch (answer.options) {
        case 'view all departments':
          viewAllDepartments(menu);
          break;
        case 'view all roles':
          viewAllRoles(menu);
          break;
        case 'view all employees':
          viewAllEmployees(menu);
          break;
        case 'add a department':
          addDepartment(menu);
          break;
        case 'add a role':
          addRole(menu);
          break;
        case 'add an employee':
          addEmployee(menu);
          break;
        case 'update an employee role':
          updateEmployeeRole(menu);
          break;
        default:
  
          break;
      }
    });
};

menu();

//module.exports = menu();

