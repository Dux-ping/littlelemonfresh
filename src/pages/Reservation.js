import React, { useState, useReducer, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Reservation.css";
import { initializeTimes, updateTimes } from "../util/times";
import { submitAPI } from "../util/Api.js";

const initialState = {
  times: initializeTimes(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: updateTimes(state.times, action) };
    default:
      return state;
  }
};

function Reservation() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    let adjustedHour;
    if (currentHour < 10 || currentHour >= 21) {
      adjustedHour = 10;
    } else {
      adjustedHour = currentMinute > 0 ? currentHour + 1 : currentHour;
    }

    const adjustedTime = `${String(adjustedHour).padStart(2, "0")}:00`;
    setDate(currentDate);
    setTime(adjustedTime);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const phoneRegex = /^[0-9]{10,12}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must be between 10 and 12 digits";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!date) newErrors.date = "Date is required";
    if (!time) {
      newErrors.time = "Time is required";
    } else {
      const [hour, minute] = time.split(":").map(Number);
      if (hour < 10 || hour > 21 || (hour === 21 && minute > 0)) {
        newErrors.time =
          "You are outside opening hours. Please select a time between 10:00 AM and 10:00 PM.";
      }
    }
    if (!people) newErrors.people = "Number of people is required";
    if (!location) newErrors.location = "Location is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const formData = { name, phone, email, date, time, people, location };
      const isSubmitted = submitAPI(formData);
      if (isSubmitted) {
        setErrors({});
        setSuccess(true);
        setName("");
        setPhone("");
        setEmail("");
        setDate("");
        setTime("");
        setPeople("");
        setLocation("");
      } else {
        setErrors({ submit: "Failed to submit the reservation. Please try again." });
      }
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", date: e.target.value });
  };

  return (
    <div className="reservation">
      {!success && <h2>Reserve a Table</h2>}
      {success ? (
        <div className="confirmation">
          <p className="success-message">
            Reservation confirmed! <br /> A confirmation email has been sent.
          </p>
          <Link to="/" className="button-primary center-button">
            Go to Home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Mike"
              className={errors.name ? "error" : ""}
              aria-label="Name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 1234567890"
              className={errors.phone ? "error" : ""}
              aria-label="Phone Number"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. mike@example.com"
              className={errors.email ? "error" : ""}
              aria-label="Email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group" onClick={() => dateInputRef.current.focus()}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              ref={dateInputRef}
              value={date}
              onChange={handleDateChange}
              min={new Date().toISOString().split("T")[0]}
              className={errors.date ? "error" : ""}
              aria-label="Date"
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>
          <div className="form-group" onClick={() => timeInputRef.current.focus()}>
            <label htmlFor="time">Time</label>
            <select
              id="time"
              ref={timeInputRef}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={errors.time ? "error" : ""}
              aria-label="Time"
            >
              {state.times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && <span className="error-message">{errors.time}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="people">Number of People</label>
            <input
              type="number"
              id="people"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              min="2"
              className={errors.people ? "error" : ""}
              aria-label="Number of People"
            />
            {errors.people && <span className="error-message">{errors.people}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="location">Occasion</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={errors.location ? "error" : ""}
              aria-label="Occasion"
            >
              <option value="">Select</option>
              <option value="inside">Anniversary</option>
              <option value="outside">Birthday</option>
            </select>
            {errors.location && <span className="error-message">{errors.location}</span>}
          </div>
          <button type="submit">Reserve Now</button>
          {errors.submit && <span className="error-message">{errors.submit}</span>}
        </form>
      )}
    </div>
  );
}

export default Reservation;
