CREATE TABLE internship
(
    internship_id SERIAL PRIMARY KEY,
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES company (company_id)
)