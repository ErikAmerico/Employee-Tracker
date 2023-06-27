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
  const sql = `
  SELECT
    roles.title AS JobTitle,
    roles.role_id AS RoleID,
    departments.department_name AS Department,
    roles.salary AS Salary
  FROM roles
  INNER JOIN departments ON roles.department_id = departments.department_id
`;
  
  db.query(sql, (err, results) => {
    if (err) throw err;
    console.table(results);
    callback();
  });
}

function viewAllEmployees(callback) {
const sql = `
  SELECT
    employees.employee_id,
    CONCAT(employees.first_name, ' ', employees.last_name) AS EmployeeName,
    roles.title AS Role,
    departments.department_name AS Department,
    roles.salary AS Salary,
    CONCAT(managers.first_name, ' ', managers.last_name) AS Manager
  FROM employees
  INNER JOIN roles ON employees.role_id = roles.role_id
  INNER JOIN departments ON roles.department_id = departments.department_id
  LEFT JOIN employees AS managers ON employees.manager_id = managers.employee_id
`;


  db.query(sql, (err, results) => {
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
        console.log(`Added ${departmentName} to the database.`);
        callback();
      });
    });
}

function addRole(callback) {

  db.query('SELECT * FROM departments', (err, results) => {
    if (err) throw err;

    const departmentNames = results.map(department => department.department_name);

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
          name: 'departmentName',
          type: 'list',
          message: 'Which department does the role belong to?',
          choices: departmentNames,
        }
      ])
      .then(answer => {
        const title = answer.title;
        const salary = answer.salary;
        const departmentName = answer.departmentName;
       
        db.query('SELECT department_id FROM departments WHERE department_name = ?',
          [departmentName], (err, result) => {
            if (err) throw err;
            const departmentId = result[0].department_id;
         
            db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
              [title, salary, departmentId],
              (err, result) => {
                if (err) throw err;
                console.log(`${title} added to roles.`);
                callback();
              });
          });
      });
  });
}

function addEmployee(callback) {

  db.query('SELECT * FROM roles', (err, roleResults) => {
    if (err) throw err;

    const roles = roleResults.map(role => ({
      name: role.title,
      value: role.role_id
    }));

    db.query('SELECT * FROM employees WHERE manager_id IS NULL', (err, results) => {
      if (err) throw err;

      const managerNames = results
        .filter(employee => employee.manager_id == null)
        .map(employee => ({
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.employee_id
        }));
      
      managerNames.unshift({ name: 'NOT APPLICABLE', value: null });

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
            type: 'list',
            message: "Select the employee's role:",
            choices: roles,
          },
          {
            name: 'managerName',
            type: 'list',
            message: 'If applicable, who is the manager of this employee?',
            choices: managerNames,
          }
        ])
        .then(answer => {
          const first = answer.firstName;
          const last = answer.lastName;
          const role = answer.roleId;
          const manager = answer.managerName;

          db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
            [first, last, role, manager],
            (err, result) => {
              if (err) throw err;
              console.log(`${first} ${last} added as an employee.`);
              callback();
            }
          );
        });
    });
  });
}

function updateEmployeeRole(callback) {

  db.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;

    const employees = results
      .map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.employee_id
      }));
    
    db.query('SELECT * FROM roles', (err, roleResults) => {
    if (err) throw err;

    const roles = roleResults.map(role => ({
      name: role.title,
      value: role.role_id
    }));
      

  inquirer
    .prompt([
      {
        name: 'employeeId',
        type: 'list',
        message: 'Select an employee to update their role:',
        choices: employees,
      },
      {
        name: 'newRoleId',
        type: 'list',
        message: 'Select the employees new role:',
        choices: roles,
      }
    ])
    .then(answer => {
      const employee = answer.employeeId;
      const newRole = answer.newRoleId;

      db.query('UPDATE employees SET role_id = ? WHERE employee_id = ?',
        [newRole, employee],
        (err, result) => {
          if (err) throw err;
          console.log(`Employee's role has been updated!`);
          callback();
        });
     }) 
    });
  });
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