CREATE TABLE student
(
    student_id SERIAL PRIMARY KEY,
    FIO varchar(60),
    email varchar(30)
);

CREATE TABLE company
(
    company_id SERIAL PRIMARY KEY,
    company_name varchar(60),
    description varchar(60)
);

CREATE TABLE internship
(
    internship_id SERIAL PRIMARY KEY,
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES company (company_id)
);

CREATE TABLE form
(
    student_id INTEGER,
    internship_id INTEGER,
    FOREIGN KEY (student_id) REFERENCES student (student_id),
    FOREIGN KEY (internship_id) REFERENCES internship (internship_id)
)