-- Write SQL Query to create a table
-- “Student” and insert data for the 
-- student table with name, address,
--email, phoneNo, class, attendance. 

CCREATE TABLE Student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    email VARCHAR(100) NOT NULL,
    phoneNo VARCHAR(15),
    class VARCHAR(10),
    attendance DECIMAL(5, 2) 
);
