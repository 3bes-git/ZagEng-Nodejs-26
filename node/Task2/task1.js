// Returns all students as JSON
const express = require("express");
const router = express.Router();
const { students } = require("./data");

router.get("/", (req, res) => {
  res.status(200).json(students);
});

module.exports = router;
