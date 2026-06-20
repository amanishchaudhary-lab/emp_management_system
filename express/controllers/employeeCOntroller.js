const Employee = require("../models/Employee");

exports.getEmployees = (req, res) => {
  Employee.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createEmployee = (req, res) => {
  Employee.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Employee Added",
      id: result.insertId,
    });
  });
};

exports.updateEmployee = (req, res) => {
  Employee.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Employee Updated",
    });
  });
};

exports.deleteEmployee = (req, res) => {
  Employee.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Employee Deleted",
    });
  });
};