const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); // Import MySQL library
require('dotenv').config();  // Load environment variables from .env file

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;  // Use the PORT from .env or fallback to 5000

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: "process.env.MYSQL_HOST", // Get MySQL host from .env
  user: "process.env.MYSQL_USER", // Get MySQL user from .env
  password: "process.env.MYSQL_PASSWORD", // Get MySQL password from .env
  database: "process.env.MYSQL_DATABASE", // Get MySQL database from .env
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
