// Updates an existing student
const express = require("express");
const router = express.Router();
const { students } = require("./data");

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { name, age, department } = req.body;

  // Validation
  if (!name || !department || age === undefined || age <= 15) {
    return res.status(400).json({ error: "inValid" });
  }

  students[index] = { ...students[index], name, age, department };

  res.status(200).json({ message: "Student updated successfully" });
});

module.exports = router;
