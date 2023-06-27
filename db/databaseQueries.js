const db = require('./databaseConnection')
const inquirer = require('inquirer');

function viewAllDepartments(callback) {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err) throw err;
      console.table(results);
      callback();
  });
}

function viewAllRoles(callback) {
  db.query('SELECT * FROM roles', (err, results) => {
    if (err) throw err;
      console.table(results);
      callback();
  });
}

function viewAllEmployees(callback) {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;
      console.table(results);
      callback();
  });
}

function addDepartment(callback) {
    inquirer
     .prompt([
       {
         name: 'departmentAdd',
         message: 'Enter the name of the new department:',
       },
      ])
     .then(answer => {
      const departmentName = answer.departmentAdd;
      db.query('INSERT INTO departments (department_name) VALUES (?)', [departmentName], (err, result) => {
        if (err) throw err;
        console.log('Department added successfully');
        callback();
      });
    });
}

function addRole(callback) {
    inquirer
     .prompt([
       {
         name: 'title',
         message: 'Enter the name of the new role:',
         },
       {
         name: 'salary',
         message: 'Enter the salary of the new role:',
         },
       {
         name: 'departmentId',
         message: 'Enter the department ID of the new role:'
        }
      ])
     .then(answer => {
         const title = answer.title;
         const salary = answer.salary;
         const departmentId = answer.departmentId;
         db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
             [title, salary, departmentId],
             (err, result) => {
                if (err) throw err;
                console.log('Role added successfully');
                callback();
      });
    });
}

function addEmployee(callback) {
    inquirer
     .prompt([
       {
         name: 'firstName',
         message: 'Enter employees first name:',
         },
       {
         name: 'lastName',
         message: 'Enter employees last name:',
         },
       {
         name: 'roleId',
         message: 'Enter ID number of the employees role:'
         },
       {
         name: 'managerId',
         message: 'Enter the ID of the manager for the new employee if applicable:',
         default: null
         }
      ])
     .then(answer => {
         const first = answer.firstName;
         const last = answer.lastName;
         const role = answer.roleId;
         const manager = answer.managerId;

        const parsedManagerId = manager === '' ? null : manager;

         db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
             [first, last, role, parsedManagerId],
             (err, result) => {
                if (err) throw err;
                console.log('Employee added successfully');
                callback();
      });
    });
}

function updateEmployeeRole(callback) {
  inquirer
    .prompt([
      {
        name: 'employeeId',
        message: 'Enter the employees ID number:'
      },
      {
        name: 'newRoleId',
        message: 'Enter the ID of the employees new role:'
      }
    ])
    .then(answer => {
      const employee = answer.employeeId;
      const newRole = answer.newRoleId;

      db.query('UPDATE employees SET role_id = ? WHERE employee_id = ?',
        [newRole, employee],
        (err, result) => {
          if (err) throw err;
          console.log('Employee role updated successfully');
          callback();
        });
  }) 
}






module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};