"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    empId: "",
    fullName: "",
    email: "",
    mobile: "",
    department: "",
    salary: "",
    joiningDate: "",
    status: "Active",
  });

  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/employees");
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      fetchEmployees();
    }
  }, [loggedIn]);

  const login = () => {
    if (username === "admin" && password === "admin123") {
      setLoggedIn(true);
    } else {
      alert("Invalid Login");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addEmployee = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/employees",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        alert("Employee Added");

        setForm({
          empId: "",
          fullName: "",
          email: "",
          mobile: "",
          department: "",
          salary: "",
          joiningDate: "",
          status: "Active",
        });

        fetchEmployees();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/api/employees/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchEmployees();
    } catch (err) {
      console.log(err);
    }
  };

  if (!loggedIn) {
    return (
      <div
        style={{
          background: "#000",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "350px",
            padding: "30px",
            border: "1px solid #333",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            Employee Login
          </h1>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <button
            onClick={login}
            style={{
              width: "100%",
              padding: "12px",
              background: "green",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <p style={{ marginTop: "15px" }}>
            Username: admin
          </p>
          <p>Password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Employee Management System</h1>

      <div
        style={{
          border: "1px solid #333",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Add Employee</h2>

        <input
          name="empId"
          placeholder="Employee ID"
          value={form.empId}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="date"
          name="joiningDate"
          value={form.joiningDate}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          style={inputStyle}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button
          onClick={addEmployee}
          style={{
            padding: "12px",
            background: "blue",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add Employee
        </button>
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Employee List</h2>

        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.empId}</td>
                <td>{emp.fullName}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>{emp.status}</td>

                <td>
                  <button
                    onClick={() =>
                      deleteEmployee(emp.id)
                    }
                    style={{
                      background: "red",
                      color: "#fff",
                      border: "none",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
};




