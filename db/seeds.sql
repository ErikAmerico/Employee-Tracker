INSERT INTO departments (department_id, department_name)
VALUES (1, "Marketing"),
       (2, "Accounting"),
       (3, "Customer Service")
       (4, "Sales")
       (5, "Technology")

INSERT INTO roles (role_id, title, salary, department_id)
VALUES (01, "Marketing Manager", 120000.00, 1)
       (02, "Chief Marketing Officer", 125000.00, 1),
       (03, "Marketing Coordinator", 90000.00, 1),
       (04, "Accounting Manager", 95000.00, 2)
       (05, "CPA", 80000.00, 2)
       (06, "General Accountant", 75000.00, 2),
       (07, "Customer Service Manager", 80000.00, 3),
       (08, "Customer Service Rep", 60000.00, 3),
       (09, "Sales Manager", 85000.00, 4),
       (010, "Sales Lead", 95000.00, 4),
       (011, "Salesperson", 88000.00, 4),
       (012, "Tech Manager", 100000, 5),
       (013, "Senior Software Engineer", 160000.00, 5),
       (014, "Software Developer", 120000.00, 5),
       (015, "Jr. Software Developer", 180000.00, 5);

INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id)
VALUES (001, "Seth", "Rogan", 01, ),
       (002, "James", "Franco", 02, 001),
       (003, "Margo", "Robbie", 03, 001),
       (004, "Kevin", "Hart", 03, 001),
       (005, "Albert", "Einstein", 04, ),
       (006, "Ben", "Affleck", 05, 005),
       (007, "Rosetta", "Stone", 06, 005),
       (008, "Joe", "Biden", 06, 005),
       (009, "Taylor", "Swift", 07, ),
       (0010, "Harry", "Styles", 08, 009),
       (0011, "Ozzy", "Osbourne", 08, 009),
       (0012, "Barack", "Obama", 08, 009),
       (0013, "Henry", "Hill", 09, ),
       (0014, "jordan", "Belfort", 010, 0013),
       (0015, "Donnie", "Azoff", 011, 0013),
       (0016, "Bernie", "Madolf", 011, 0013),
       (0017, "Lada", "Jarabek", 012, ),
       (0018, "Cory", "Benton", 013, 0017),
       (0019, "Micahel", "Tranquillo", 014, 0017),
       (0020, "Amy", "Green", 014, 0017),
       (0021, "Elvis", "Queliz", 014, 0017),
       (0022, "Connor", "Martin", 014, 0017),
       (0023, "Erik", "Olson", 015, 0017),
     
