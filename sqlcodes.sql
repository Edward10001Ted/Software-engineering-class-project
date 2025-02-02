-- CREATE DATABASE ComputerEngineeringDept;
-- CREATE SCHEMA department;
-- CREATE TABLE department.students (
--     student_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     dob DATE,
--     email VARCHAR(100),
--     phone VARCHAR(15)
-- );
-- CREATE TABLE department.fees (
--     fee_id SERIAL PRIMARY KEY,
--     student_id INT REFERENCES department.students(student_id),
--     amount DECIMAL(10, 2),
--     date_paid DATE,
--     payment_method VARCHAR(50)
-- );
-- CREATE TABLE department.courses (
--     course_id SERIAL PRIMARY KEY,
--     course_name VARCHAR(100),
--     course_code VARCHAR(10)
-- );

-- CREATE TABLE department.enrollments (
--     enrollment_id SERIAL PRIMARY KEY,
--     student_id INT REFERENCES department.students(student_id),
--     course_id INT REFERENCES department.courses(course_id),
--     enrollment_date DATE
-- );
-- CREATE TABLE department.lectures (
--     lecture_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     email VARCHAR(100),
--     phone VARCHAR(15)
-- );

-- CREATE TABLE department.lecture_course_assignments (
--     assignment_id SERIAL PRIMARY KEY,
--     lecture_id INT REFERENCES department.lectures(lecture_id),
--     course_id INT REFERENCES department.courses(course_id)
-- );
-- CREATE TABLE department.teaching_assistants (
--     ta_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     email VARCHAR(100),
--     phone VARCHAR(15)
-- );

-- CREATE TABLE department.lecture_ta_assignments (
--     assignment_id SERIAL PRIMARY KEY,
--     lecture_id INT REFERENCES department.lectures(lecture_id),
--     ta_id INT REFERENCES department.teaching_assistants(ta_id)
-- );
-- Inserting sample students into the department.students table

-- INSERT INTO department.students (first_name, last_name, dob, email, phone)
-- VALUES
-- ('Nana Kwasi', 'Kwakyie', '2003-06-15', 'nana@stuggmail.com', '+233273833829'),
-- ('Abena', 'Nhyira', '2002-08-20', 'abena_nhyira@stuggmail.com', '+233201234002'),
-- ('Nana', 'Berima', '2001-03-25', 'nanaberima@stuggmail.com', '+2332539382930'),
-- ('Derick', 'Asiamah', '1996-12-10', 'derickasiamah@stuggmail.com', '+23324299303099'),
-- ('Samuel', 'Antwi', '1995-11-05', 'samuel.antwi@stuggmail.com', '+23354689202');

-- INSERT INTO department.fees (student_id, amount, date_paid, payment_method)
-- VALUES
-- (1, 502.00, '2024-01-15', 'momo'),
-- (2, 455.00, '2024-04-21', 'bank'),
-- (3, 900.00, '2024-06-25', 'bank'),
-- (4, 850.00, '2024-04-11', 'bank'),
-- (5, 700.00, '2024-07-15', 'momo');
-- INSERT INTO department.courses (course_name, course_code)
-- VALUES
-- ('Linear Algebra', 'CPEN202'),
-- ('Java', 'CPEN209'),
-- ('CSD', 'CPEN206'),
-- ('C++', 'CPEN203');
-- INSERT INTO department.enrollments (student_id, course_id)
-- VALUES
-- (1, 1), 
-- (2, 2),
-- (3, 3),
-- (4, 4), 
-- (5, 1); 
-- Insert sample lectures
-- INSERT INTO department.lectures (first_name, last_name, email, phone)
-- VALUES
--     ('KK', 'Busia', 'kkbusi@gmail.com', '+233201234567'),
--     ('Ama', 'Ghana', 'amaghana@gmail.com', '+233202345678'),
--     ('Yaw', 'Dabo', 'yawdabo@gmail.com', '+233203456789'),
--     ('Maanu', 'Ansah', 'maanuansah@gmail.com', '+233204567890');
-- INSERT INTO department.lecture_course_assignments (lecture_id, course_id)
-- VALUES
--     (1, 1), -- Lecture 1 assigned to Software Engineering
--     (2, 2), -- Lecture 2 assigned to Data Structures and Algorithms
--     (3, 3), -- Lecture 3 assigned to Linear Circuit
--     (4, 4); -- Lecture 4 assigned to Python Programming
-- Insert sample teaching assistants
-- INSERT INTO department.teaching_assistants (first_name, last_name, email, phone)
-- VALUES
--     ('Kwan', 'Houston', 'kwanhoston@gmail.com', '+233545322555'),
--     ('Ann', 'Marie', 'annmaria@gmail.com', '+233244392004'),
--     ('Kofi', 'Menu', 'kofimenju@gmail.com', '+233249393777'),
--     ('Akos', 'Nsia', 'akosnsia@gmail.com', '+23323339938333');
-- INSERT INTO department.lecture_ta_assignments (lecture_id, ta_id)
-- VALUES
--     (1, 1),
--     (2, 2),
--     (3, 3),
--     (4, 4);
-- CREATE OR REPLACE FUNCTION department.calculate_outstanding_fees()
-- RETURNS JSON AS $$
-- DECLARE
--     result JSON;
-- BEGIN
--     SELECT json_agg(row_to_json(fees_due)) INTO result
--     FROM (
--         SELECT 
--             s.student_id,
--             s.first_name,
--             s.last_name,
--             COALESCE(SUM(f.amount), 0) AS total_paid,
--             5000 - COALESCE(SUM(f.amount), 0) AS outstanding_fees
--         FROM 
--             department.students s
--         LEFT JOIN 
--             department.fees f ON s.student_id = f.student_id
--         GROUP BY 
--             s.student_id
--     ) AS fees_due;

--     RETURN result;
-- END;
-- $$ LANGUAGE plpgsql;
