// Returns students filtered by department
const express = require("express");
const router = express.Router();
const { students } = require("./data");

router.get("/search", (req, res) => {
  const { department } = req.query;

  if (!department) {
    return res.status(400).json({ error: "department required" });
  }

  const result = students.filter(
    (s) => s.department.toLowerCase() === department.toLowerCase()
  );

  res.status(200).json(result);
});

module.exports = router;
