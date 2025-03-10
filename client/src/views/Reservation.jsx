/** @format */

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedReservations = [...reservations, reservationData];
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
    handleDelete(index); // Delete the reservation from the list before updating
  };

  // Function to check if a date is unavailable
  const isDateUnavailable = (date) => {
    return reservations.some((reservation) => {
      const checkinDate = new Date(reservation.checkin);
      const checkoutDate = new Date(reservation.checkout);
      return date >= checkinDate && date <= checkoutDate;
    });
  };

  return (
    <div className="container-fluid centered-content">
      <div className="row">
        {/* Left Column: Reservation Form */}
        <div className="col-md-5">
          <h1>Bed & Breakfast Reservation Form</h1>
          <h2>Welcome to Our Reservation page!</h2>
          <p>Please book a reservation for you and your family to stay</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                value={reservationData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={reservationData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkin">Check-in Date:</label>
              <DatePicker
                className="form-control"
                selected={
                  reservationData.checkin
                    ? new Date(reservationData.checkin)
                    : null
                }
                onChange={(date) =>
                  setReservationData({ ...reservationData, checkin: date })
                }
                required
                minDate={new Date()} // Disable past dates
                filterDate={(date) => !isDateUnavailable(date)} // Disable unavailable dates
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkout">Check-out Date:</label>
              <DatePicker
                className="form-control"
                selected={
                  reservationData.checkout
                    ? new Date(reservationData.checkout)
                    : null
                }
                onChange={(date) =>
                  setReservationData({ ...reservationData, checkout: date })
                }
                required
                minDate={new Date(reservationData.checkin || Date.now())} // Check-out can't be before check-in
                filterDate={(date) => !isDateUnavailable(date)} // Disable unavailable dates
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests:</label>
              <input
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
              <label htmlFor="room">Room Type:</label>
              <select
                className="form-control"
                id="room"
                name="room"
                value={reservationData.room}
                onChange={handleChange}
                required>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="special-requests">Special Requests:</label>
              <textarea
                className="form-control"
                id="special-requests"
                name="specialRequests"
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

        {/* Right Column: Current Reservations */}
        <div className="col-md-7">
          <h2>Current Reservations</h2>
          <div>
            {reservations.length === 0 ? (
              <p>No reservations yet!</p>
            ) : (
              <ul>
                {reservations.map((reservation, index) => (
                  <li key={index}>
                    <p>
                      <strong>{reservation.name}</strong> - {reservation.room}{" "}
                      room
                      <br />
                      Check-in: {reservation.checkin} - Check-out:{" "}
                      {reservation.checkout}
                      <br />
                      Guests: {reservation.guests}
                      <br />
                      Special Requests: {reservation.specialRequests || "None"}
                    </p>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUpdate(index)}>
                      Update
                    </button>
                    <span>|</span>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
