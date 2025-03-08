
import React, { useState } from "react";

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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting the usual way
    // Now handle the form submission (like making an API call)
    console.log("Submitting reservation..."); // Debugging log
    
  };

  return (
    <div className="container-fluid centered-content">
      <h1>Bed & Breakfast Reservation Form</h1>
      <h2>Welcome Our Reservation page!</h2>
      <p>Please come book a reservation for you and your family to stay</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name form-label">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservationData.name}
            onChange={handleChange}
            required
          />
          <hr />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={reservationData.email}
            onChange={handleChange}
            required
          />
          <hr />
        </div>
        <div className="form-group">
          <label htmlFor="checkin">Check-in Date:</label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            value={reservationData.checkin}
            onChange={handleChange}
            required
          />
          <hr />
        </div>
        <div className="form-group">
          <label htmlFor="checkout">Check-out Date:</label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            value={reservationData.checkout}
            onChange={handleChange}
            required
          />
          <hr />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            value={reservationData.guests}
            onChange={handleChange}
            required
          />
          <hr />
        </div>
        <div className="form-group">
          <label htmlFor="room">Room Type:</label>
          <select
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
        <hr />
        <div className="form-group">
          <label htmlFor="special-requests">Special Requests:</label>
          <textarea
            id="special-requests"
            name="specialRequests"
            value={reservationData.specialRequests}
            onChange={handleChange}></textarea>
        </div>
        <hr />
        {/* Example for a submit button in a form */}
        <button type="submit" onClick={handleSubmit}>
          Submit Reservation
        </button>
      </form>
    </div>
  );
}

export default Reservation;