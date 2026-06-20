CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
 id INT AUTO_INCREMENT PRIMARY KEY,
 empId VARCHAR(50),
 fullName VARCHAR(100),
 email VARCHAR(100),
 mobile VARCHAR(15),
 department VARCHAR(100),
 salary DECIMAL(10,2),
 joiningDate DATE,
 status ENUM('Active','Inactive')
);

describe employees;
