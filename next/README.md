Name : chaudhary Manish
project : Employee Management System

Project Overview

Employee Management System is a full-stack web application developed using Next.js, Express.js, and MySQL. The system allows administrators to manage employee records through Create, Read, Update, and Delete (CRUD) operations.

Technology Stack

Frontend

- Next.js 15+
- React.js
- JavaScript

Backend

- Node.js
- Express.js

Database

- mysql


Functional Requirements

Employee Fields

- Employee ID (Auto Increment)
- Full Name
- Email
- Mobile Number
- Department
- Salary
- Joining Date
- Status (Active / Inactive)

---

Features

Employee Management

- Create Employee
- Read Employees
- Search Employees
- Pagination Support
- Update Employee
- Delete Employee
- View Employee Details

User Experience

- Responsive UI
- Form Validation
- Loading Indicators
- Success Messages
- Error Handling

---

REST API Endpoints

Create Employee

POST "/api/employees"

Get All Employees

GET "/api/employees"

Get Employee By ID

GET "/api/employees/:id"

Update Employee

PUT "/api/employees/:id"

Delete Employee

DELETE "/api/employees/:id"

---

Database Schema

employees

Column| Type
id| INT PRIMARY KEY AUTO_INCREMENT
full_name| VARCHAR(100)
email| VARCHAR(100)
mobile_number| VARCHAR(15)
department| VARCHAR(50)
salary| DECIMAL(10,2)
joining_date| DATE
status| ENUM('Active','Inactive')
created_at| TIMESTAMP
updated_at| TIMESTAMP

---

Frontend Pages

Employee Listing

- Display all employees
- Search functionality
- Pagination

Add Employee

- Employee creation form
- Input validation

Edit Employee

- Update employee information

Employee Details

- Detailed employee information

---

Validation Rules

- Full Name is required
- Email must be valid
- Mobile Number must contain valid digits
- Salary must be numeric
- Joining Date is required
- Status must be Active or Inactive

---

Error Handling

- Invalid Request Data
- Employee Not Found
- Database Errors
- Internal Server Errors

---

Installation

Clone Repository

git clone <repository-url>

Install Dependencies

npm install

Configure Database

Create MySQL database:

CREATE DATABASE employee_management;

Run Backend

npm run server

Run Frontend

npm run dev

---

Project Structure

Employee Management System
│
├── express/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── db.js
│
├── next/
│   ├── app/
│   ├── public/
│   ├── package.json
│   └── next.config.ts
│
└── README.md
---

Conclusion

The Employee Management System provides an efficient solution for managing employee records with modern web technologies. The application follows CRUD architecture, REST API standards, validation, error handling, and responsive design principles.
---