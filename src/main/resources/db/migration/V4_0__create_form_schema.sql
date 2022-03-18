CREATE TABLE form
(
    student_id INTEGER,
    internship_id INTEGER,
    FOREIGN KEY (student_id) REFERENCES student (student_id),
    FOREIGN KEY (internship_id) REFERENCES internship (internship_id)
)