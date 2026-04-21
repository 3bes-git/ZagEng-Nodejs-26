const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
// Custom logger middleware
const logger = (req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
};
app.use(logger);

// Routes
app.use("/students", require("./task3")); // GET - students - search
app.use("/students", require("./task1")); // GET - students
app.use("/students", require("./task2")); // GET - students - id
app.use("/students", require("./task4")); // POST - students
app.use("/students", require("./task5")); // PUT - students - id
app.use("/students", require("./task6")); // DELETE - students - id

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
