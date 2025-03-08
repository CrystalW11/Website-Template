/** @format */

const express = require("express");
const mysql = require("mysql2"); // MySQL library

// Create MySQL connection
const db_reservations = mysql.createConnection({
  host: "localhost", // Your MySQL host
  user: "root", // MySQL username
  password: "root", // Your MySQL password
  database: "bnb_reservations", // Your MySQL database name
});

// Create a router
const router = express.Router();

// POST route to handle new reservations
router.post("/", (req, res) => {
  const { name, email, checkin, checkout, guests, room, specialRequests } =
    req.body;

  // Insert the reservation into MySQL database
  const query = `
    INSERT INTO reservations (name, email, checkin, checkout, guests, room, special_requests)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.execute(
    query,
    [name, email, checkin, checkout, guests, room, specialRequests],
    (err, results) => {
      if (err) {
        console.error("Error saving reservation:", err);
        return res
          .status(500)
          .json({ message: "Error saving reservation", error: err });
      }
      res.status(201).json({ message: "Reservation successfully saved!" });
    }
  );
});

// Export the router to be used in server.js
module.exports = router;
