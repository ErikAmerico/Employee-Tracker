INSERT INTO departments (department_name)
VALUES ("Marketing"),
       ("Accounting"),
       ("Technology");

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Manager", 120000.00, 1),
       ("Marketing Coordinator", 90000.00, 1),
       ("Accounting Manager", 95000.00, 2),
       ("General Accountant", 75000.00, 2),
       ("Tech Manager", 100000, 3),
       ("Senior Software Engineer", 160000.00, 3),
       ("Jr. Software Developer", 180000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Seth", "Rogan", 1, NULL),
       ("Margo", "Robbie", 2, 1),
       ("Albert", "Einstein", 3, NULL),
       ("Rosetta", "Stone", 4, 3),
       ("Joe", "Biden", 4, 3),
       ("Lada", "Jarabek", 5, NULL),
       ("Cory", "Benton", 6, 5),
       ("Erik", "Olson", 7, 5);
     
