INSERT INTO departments (department_id, department_name)
VALUES (1, "Marketing"),
       (2, "Accounting"),
       (3, "Customer Service"),
       (4, "Sales"),
       (5, "Technology");

INSERT INTO roles (role_id, title, salary, department_id)
VALUES (1, "Marketing Manager", 120000.00, 1),
       (2, "Chief Marketing Officer", 125000.00, 1),
       (3, "Marketing Coordinator", 90000.00, 1),
       (4, "Accounting Manager", 95000.00, 2),
       (5, "CPA", 80000.00, 2),
       (6, "General Accountant", 75000.00, 2),
       (7, "Customer Service Manager", 80000.00, 3),
       (8, "Customer Service Rep", 60000.00, 3),
       (9, "Sales Manager", 85000.00, 4),
       (10, "Sales Lead", 95000.00, 4),
       (11, "Salesperson", 88000.00, 4),
       (12, "Tech Manager", 100000, 5),
       (13, "Senior Software Engineer", 160000.00, 5),
       (14, "Software Developer", 120000.00, 5),
       (15, "Jr. Software Developer", 180000.00, 5);

INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Seth", "Rogan", 1, NULL),
       (2, "James", "Franco", 2, 1),
       (3, "Margo", "Robbie", 3, 1),
       (4, "Kevin", "Hart", 3, 1),
       (5, "Albert", "Einstein", 4, NULL),
       (6, "Ben", "Affleck", 5, 5),
       (7, "Rosetta", "Stone", 6, 5),
       (8, "Joe", "Biden", 6, 5),
       (9, "Taylor", "Swift", 7, NULL),
       (10, "Harry", "Styles", 8, 9),
       (11, "Ozzy", "Osbourne", 8, 9),
       (12, "Barack", "Obama", 8, 9),
       (13, "Henry", "Hill", 9, NULL),
       (14, "jordan", "Belfort", 10, 13),
       (15, "Donnie", "Azoff", 11, 13),
       (16, "Bernie", "Madolf", 11, 13),
       (17, "Lada", "Jarabek", 12, NULL),
       (18, "Cory", "Benton", 13, 17),
       (19, "Micahel", "Tranquillo", 14, 17),
       (20, "Amy", "Green", 14, 17),
       (21, "Elvis", "Queliz", 14, 17),
       (22, "Connor", "Martin", 14, 17),
       (23, "Erik", "Olson", 15, 17);
     
