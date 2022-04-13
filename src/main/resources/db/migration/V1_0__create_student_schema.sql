CREATE TABLE IF NOT EXISTS roles
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles (id)
);

CREATE SEQUENCE seq_for_all
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1;

CREATE TABLE IF NOT EXISTS student
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FIO VARCHAR,
    email VARCHAR,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS company
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    name VARCHAR,
    description VARCHAR,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS internship
(
    id SERIAL PRIMARY KEY,
    company_id INTEGER,
    name VARCHAR,
    description VARCHAR,
    FOREIGN KEY (company_id) REFERENCES company (id)
);

CREATE TABLE IF NOT EXISTS form
(
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    internship_id INTEGER,
    description VARCHAR,
    FOREIGN KEY (student_id) REFERENCES student (id),
    FOREIGN KEY (internship_id) REFERENCES internship (id)
);

INSERT INTO roles VALUES(1, 'ROLE_ADMIN');
INSERT INTO roles VALUES(2, 'ROLE_STUDENT');
INSERT INTO roles VALUES(3, 'ROLE_COMPANY');
INSERT INTO users VALUES(1, 'admin', '$2a$10$IqTJTjn39IU5.7sSCDQxzu3xug6z/LPU6IF0azE/8CkHCwYEnwBX.', 1);

CREATE OR REPLACE FUNCTION user_student() RETURNS TRIGGER AS $user_student$
BEGIN
    --
    -- Добавление строки в emp_audit, которая отражает операцию, выполняемую в emp;
    -- для определения типа операции применяется специальная переменная TG_OP.
    --
    /* IF (TG_OP = 'DELETE') THEN
         INSERT INTO emp_audit SELECT 'D', now(), user, OLD.*;
         RETURN OLD;*/
    /* ELSIF (TG_OP = 'UPDATE') THEN
         INSERT INTO emp_audit SELECT 'U', now(), user, NEW.*;
         RETURN NEW;*/
    IF (TG_OP = 'INSERT') THEN
        IF (NEW.role_id = 2) THEN
            INSERT INTO student VALUES(nextval('seq_for_all'), NEW.id, NULL, NULL);
        ELSIF (NEW.role_id = 3) THEN
            INSERT INTO company VALUES(nextval('seq_for_all'), NEW.id, NULL, NULL);
        END IF;
        RETURN NEW;
    END IF;
    RETURN NULL; -- возвращаемое значение для триггера AFTER игнорируется
END
$user_student$ LANGUAGE plpgsql;

CREATE TRIGGER user_student
    AFTER INSERT ON users
    FOR EACH ROW EXECUTE PROCEDURE user_student();

INSERT INTO users VALUES(2, 'alex', '$2a$10$IqTJTjn39IU5.7sSCDQxzu3xug6z/LPU6IF0azE/8CkHCwYEnwBX.', 3);

