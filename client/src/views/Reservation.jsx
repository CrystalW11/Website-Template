/** @format */

import React, { useState, useEffect } from "react";

// Utility function to format dates
const Reservation = () => {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: 1,
    room: "single",
    specialRequests: "",
  });

  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(""); // State to handle error messages

  // Load existing reservations from localStorage
  useEffect(() => {
    const storedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  // Function to check for overlapping dates
  const isOverlapping = (newCheckin, newCheckout) => {
    for (let reservation of reservations) {
      const existingCheckin = new Date(reservation.checkin);
      const existingCheckout = new Date(reservation.checkout);
      const newCheckinDate = new Date(newCheckin);
      const newCheckoutDate = new Date(newCheckout);

      // Check if the new reservation dates overlap with an existing reservation
      if (
        (newCheckinDate >= existingCheckin &&
          newCheckinDate < existingCheckout) ||
        (newCheckoutDate > existingCheckin &&
          newCheckoutDate <= existingCheckout)
      ) {
        return true; // There's a conflict
      }
    }
    return false; // No conflict
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for date overlap before submitting
    const { checkin, checkout } = reservationData;

    if (!checkin || !checkout) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    // Check for date conflict
    if (isOverlapping(checkin, checkout)) {
      setError("The selected dates are already booked.");
      return;
    }

    // Reset error state if no conflict
    setError("");

    // Create the timestamp when the reservation is created
    const createdAt = new Date().toISOString(); // ISO 8601 format

    // Add the timestamp to reservation data
    const updatedReservationData = {
      ...reservationData,
      createdAt,
    };

    // Proceed with adding the new reservation
    const updatedReservations = [...reservations, updatedReservationData];
    setReservations(updatedReservations);

    // Save reservations to localStorage
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));

    // Reset form after submission
    setReservationData({
      name: "",
      email: "",
      checkin: "",
      checkout: "",
      guests: 1,
      room: "single",
      specialRequests: "",
    });
  };

  const handleDelete = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);

    // Update localStorage
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  const handleUpdate = (index) => {
    setReservationData(reservations[index]);
    // Instead of deleting the reservation immediately, just allow editing.
    // Removing the delete action here.
  };

  // Helper function to format dates and timestamps (without leading zeros)
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    // Check if the date is valid
    if (isNaN(date)) {
      return "Invalid Date"; // Return a default text if the date is invalid
    }

    const options = {
      weekday: "short", // Optional: day of the week
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric", // Hour (no leading zeros)
      minute: "numeric", // Minute (no leading zeros)
      hour12: true, // AM/PM format
    };
    return date.toLocaleString("en-US", options);
  };

  // Get the first day of the month (0-6 for Sunday-Saturday)
  const getFirstDayOfMonth = (month, year) => {
    const date = new Date(year, month, 1);
    return date.getDay();
  };

  // Generate the list of dates for the current month
  const generateMonthDates = (month, year) => {
    const firstDay = getFirstDayOfMonth(month, year);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dates = [];
    let dayCount = 1;

    // Create empty slots for days before the first day
    for (let i = 0; i < firstDay; i++) {
      dates.push(null);
    }

    // Populate the dates for the current month
    for (let i = firstDay; i < firstDay + daysInMonth; i++) {
      dates.push(dayCount++);
    }

    return dates;
  };

  // Convert reservation data into day numbers for the calendar
  const getReservedDays = () => {
    return reservations.map((reservation) => {
      const checkin = new Date(reservation.checkin);
      const checkout = new Date(reservation.checkout);

      const checkinDay = checkin.getDate();
      const checkoutDay = checkout.getDate();

      return { checkinDay, checkoutDay };
    });
  };

  const renderCalendar = () => {
    const currentMonth = new Date().getMonth(); // Get the current month (0-indexed)
    const currentYear = new Date().getFullYear(); // Get the current year
    const monthDates = generateMonthDates(currentMonth, currentYear);
    const reservedDays = getReservedDays();

    return monthDates.map((date, index) => {
      if (date === null) {
        return (
          <div key={index} className="calendar-day empty-day">
            {""}
          </div>
        );
      }

      // Check if the current date is reserved
      const reserved = reservedDays.some(
        (reservation) =>
          date >= reservation.checkinDay && date <= reservation.checkoutDay
      );

      return (
        <div
          key={index}
          className={`calendar-day ${reserved ? "reserved" : ""}`}
          title={reserved ? "This day is reserved" : ""}>
          {date}
        </div>
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column: Reservation Form */}
        <div className="col-md-4 mb-4">
          <h1>Welcome to Our Bed & Breakfast Reservation Form</h1>
          <p>Please book a reservation for you and your family to stay</p>
          {/* Error message */}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name" className="font">
                Full Name:
              </label>
              <input
                style={{ color: "purple" }}
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Full Name Here"
                value={reservationData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="font">
                Email Address:
              </label>
              <input
                style={{ color: "purple" }}
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
                value={reservationData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkin" className="font">
                Check-in Date:
              </label>
              <input
                style={{ color: "purple" }}
                className="form-control"
                type="date"
                id="checkin"
                name="checkin"
                value={reservationData.checkin}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkout" className="font">
                Check-out Date:
              </label>
              <input
                style={{ color: "purple" }}
                className="form-control"
                type="date"
                id="checkout"
                name="checkout"
                value={reservationData.checkout}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests" className="font">
                Number of Guests:
              </label>
              <input
                style={{ color: "purple" }}
                className="form-control"
                type="number"
                id="guests"
                name="guests"
                min="1"
                value={reservationData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="room" className="font">
                Room Type:
              </label>
              <select
                style={{ color: "purple" }}
                className="form-control"
                id="room"
                name="room"
                value={reservationData.room}
                onChange={handleChange}
                required>
                <option value="single" style={{ color: "purple" }}>
                  Single
                </option>
                <option value="double" style={{ color: "purple" }}>
                  Double
                </option>
                <option value="suite" style={{ color: "purple" }}>
                  Suite
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="special-requests" className="font">
                Special Requests:
              </label>
              <textarea
                style={{ color: "purple" }}
                className="form-control"
                id="special-requests"
                name="specialRequests"
                placeholder="Please list any special accommodations needed."
                value={reservationData.specialRequests}
                onChange={handleChange}></textarea>
            </div>

            <div className="container">
              <button className="btn btn-primary" type="submit">
                Submit Reservation
              </button>
            </div>
          </form>
        </div>

        {/* Middle Column: Reservation List */}
        <div className="col-md-4 mb-4">
          <h3>Booked Reservations</h3>
          <ul>
            {reservations.length === 0 ? (
              <p>No reservations yet!</p>
            ) : (
              reservations.map((reservation, index) => (
                <li key={index}>
                  <p>
                    <strong>{reservation.name}</strong> -{" "}
                    <span style={{ color: "purple" }}>{reservation.room} </span>
                    room
                    <br />
                    <strong>Check-in:</strong>{" "}
                    <span style={{ color: "purple" }}>
                      {formatDateTime(reservation.checkin)}
                    </span>
                    <br />
                    <strong>Check-out:</strong>{" "}
                    <span style={{ color: "purple" }}>
                      {formatDateTime(reservation.checkout)}
                    </span>
                    <br />
                    <strong>Guests:</strong>{" "}
                    <span style={{ color: "purple" }}>
                      {reservation.guests}
                    </span>
                    <br />
                    <strong>Special Requests:</strong>{" "}
                    <span style={{ color: "purple" }}>
                      {reservation.specialRequests || "None"}
                    </span>
                    <br />
                    <strong>Reservation made at:</strong>{" "}
                    <span style={{ color: "purple" }}>
                      {formatDateTime(reservation.createdAt)}
                    </span>
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleUpdate(index)}>
                    Update
                  </button>
                  <span> | </span>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Right Column: Calendar */}
        <div className="col-md-4">
          <h2>Monthly Calendar</h2>
          <div className="calendar-container">
            <div className="calendar-header">
              <div className="calendar-day-name">Sun</div>
              <div className="calendar-day-name">Mon</div>
              <div className="calendar-day-name">Tue</div>
              <div className="calendar-day-name">Wed</div>
              <div className="calendar-day-name">Thu</div>
              <div className="calendar-day-name">Fri</div>
              <div className="calendar-day-name">Sat</div>
            </div>
            <div className="calendar-grid">{renderCalendar()}</div>
          </div>

          {/* Legend showing availability */}
          <div className="legend mt-4">
            <h4>Legend:</h4>
            <div className="legend-item">
              <span className="legend-color reserved"></span> Reserved
            </div>
            <div className="legend-item">
              <span className="legend-color available"></span> Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
