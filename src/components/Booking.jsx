import React from "react";
import "./styles/booking.css";

const Booking = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Reservation booked successfully!");
  };
  return (
    <section id="booking">
      <h1>Book a reservation for that special event!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" required />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" required>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </section>
  );
};

export default Booking;
