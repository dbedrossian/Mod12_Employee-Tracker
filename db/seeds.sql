INSERT INTO department (deptName)
VALUES ('Musicians'),
       ('Engineers'),
       ('Facilities'),
       ('Artists');

INSERT INTO roles (title, salary, department_id)
VALUES ('Tenured Musician', 250000, 1),
        ('Conductor', 750000, 3),
        ('Lead Engineer', 150000, 2),
        ('Assistant Engineer', 60000, 4);


INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ('firstName1', 'lastName1', 1, 3),
        ('firstName2', 'lastName2', 2, 4),
        ('firstName3', 'lastName3', 4, 1),
        ('firstName4', 'lastName4', 3, 1),
        ('firstName5', 'lastName5', 1, 2);

INSERT INTO manager (manager_name, manager_id)
VALUES ('manager1', 1),
        ('manager2', 2),
        ('manager3', 3),
        ('manager4', 4),
        ('manager5', 5);