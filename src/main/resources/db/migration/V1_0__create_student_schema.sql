CREATE TABLE student
(
    id SERIAL PRIMARY KEY,
    FIO varchar(60),
    email varchar(30)
);

CREATE TABLE company
(
    id SERIAL PRIMARY KEY,
    company_name varchar(60),
    description varchar(60)
);

CREATE TABLE internship
(
    id SERIAL PRIMARY KEY,
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES company (id)
);

CREATE TABLE form
(
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    internship_id INTEGER,
    FOREIGN KEY (student_id) REFERENCES student (id),
    FOREIGN KEY (internship_id) REFERENCES internship (id),
    CONSTRAINT foreign_id_unique UNIQUE (student_id, internship_id)
)