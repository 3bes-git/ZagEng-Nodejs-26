// Adds a new student
const express = require("express");
const router = express.Router();
const { students, getNextId } = require("./data");

router.post("/", (req, res) => {
  const { name, age, department } = req.body;

  // Validation
  if (!name || !department || age === undefined || age <= 15) {
    return res.status(400).json({ error: "inValid" });
  }

  const newStudent = { id: getNextId(), name, age, department };
  students.push(newStudent);

  res.status(201).json({
    message: "Student created successfully",
    student: newStudent,
  });
});

module.exports = router;
