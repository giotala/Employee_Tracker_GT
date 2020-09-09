USE employeeDB;

INSERT INTO department (name)
VALUES 
('Sales')
, ('Engineering')
, ('FinancePRIMARY')
, ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES 
('Sales Lead', 100000, 1)
, ('Salesperson', 80000, 1)
, ('Lead Engineer', 150000, 2)
, ('Software Engineer', 120000, 2)
, ('Accountant', 125000, 3)
, ('Legal Team Lead', 250000, 4)
, ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Gio', 'Talabong', 2, null)
, ('Maverick', 'Acampado', 3, null)

