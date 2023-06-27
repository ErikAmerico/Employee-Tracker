const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./db/databaseQueries');


const menu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'options',
        message: 'Select what you would like to do:',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        pageSize: 10,
      },
    ])
    .then(answer => {
      switch (answer.options) {
        case 'View all departments':
          viewAllDepartments(menu);
          break;
        case 'View all roles':
          viewAllRoles(menu);
          break;
        case 'View all employees':
          viewAllEmployees(menu);
          break;
        case 'Add a department':
          addDepartment(menu);
          break;
        case 'Add a role':
          addRole(menu);
          break;
        case 'Add an employee':
          addEmployee(menu);
          break;
        case 'Update an employee role':
          updateEmployeeRole(menu);
          break;
        default:
  
          break;
      }
    });
};

menu();

