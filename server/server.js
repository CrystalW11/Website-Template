/** @format */

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); // Import MySQL library

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost", // MySQL server host
  user: "root", // MySQL username
  password: "root", // MySQL password
  database: "bnb_reservations", // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Import routes (e.g., reservations route)
const reservationRoutes = require("./index");
app.use("/reservations", reservationRoutes); // Set the prefix for reservation routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
