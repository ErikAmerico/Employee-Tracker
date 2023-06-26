const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

const menu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'options',
        message: 'Select what you would like to do:',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      },
    ])
    .then(answer => {
      switch (answer.options) {
        case 'view all departments':
          connection.query('SELECT * FROM departments', (err, results) => {
            if (err) throw err;
            console.table(results);
            menu();
          });
          break;
        case 'view all roles':
    
          break;
        case 'view all employees':

          break;
        case 'add a department':

          break;
        case 'add a role':
     
          break;
        case 'add an employee':

          break;
        case 'update an employee role':

          break;
        default:
  
          break;
      }
    });
};

menu();

