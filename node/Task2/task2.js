// Returns a single student by id, or 404 if not found
const express = require("express");
const router = express.Router();
const { students } = require("./data");

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ error: "Error404,Student not found" });
  }

  res.status(200).json({ student });
});

module.exports = router;
