const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

// Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//     return console.log("Connected to the MySQL database");
//   }
// });

// Read all records
app.get("/", (req, res) => {
  const sql = "SELECT * FROM student1";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json(data);
  });
  // res.json("Hello from Backend");
});

// Start the server
app.listen(8081, () => {
  console.log("Listening...");
});
