// Deletes a student by id
const express = require("express");
const router = express.Router();
const { students } = require("./data");

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  students.splice(index, 1);

  res.status(200).json({ message: "Student deleted successfully" });
});

module.exports = router;
