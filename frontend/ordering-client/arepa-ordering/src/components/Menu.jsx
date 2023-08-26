// Menu Component

import React, { useState } from "react";
import "./Menu.css";
import arepa_chicken from "../assets/arepa_chicken.png";
import arepa_chicken_salsa from "../assets/arepa_chicken_salsa.png";
import arepa_salsa from "../assets/arepa_salsa.png";
import arepa_plain from "../assets/arepa_plain.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const getNextThreeDates = () => {
  const result = [];
  const today = new Date();
  let nextDate = new Date(today);

  while (result.length < 3) {
    nextDate.setDate(nextDate.getDate() + 1); // Move to the next day.
    const day = nextDate.getDay();

    if (day === 2 || day === 4) {
      // Check if it's a Tuesday or Thursday.
      result.push(new Date(nextDate)); // Clone the date to avoid reference issues.
    }
  }

  return result;
};

const Menu = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPickUp, setIsPickUp] = useState(false);
  const [counters, setCounters] = useState({
    plain: 0,
    salsa: 0,
    chicken: 0,
    salsaChicken: 0,
  });

  const [pickupDate, setPickupDate] = useState(null);
  const availableDates = getNextThreeDates();

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset hours, minutes, seconds, and milliseconds for comparison.

  const isAvailableDate = (date) => {
    return availableDates.some(
      (availableDate) => availableDate.toDateString() === date.toDateString()
    );
  };

  const menuOptions = [
    { key: "plain", title: "3 Plain Arepas", price: 10, image: arepa_plain },
    {
      key: "salsa",
      title: "3 Arepas with Salsa",
      price: 11,
      image: arepa_salsa,
    },
    {
      key: "chicken",
      title: "3 Arepas with Chicken",
      price: 13,
      image: arepa_chicken,
    },
    {
      key: "salsaChicken",
      title: "3 Arepas with Salsa & Chicken",
      price: 14,
      image: arepa_chicken_salsa,
    },
  ];

  const totalItems = Object.values(counters).reduce((acc, val) => acc + val, 0);

  const totalPrice = menuOptions.reduce(
    (acc, option) => acc + option.price * counters[option.key],
    0
  );

  const adjustCounter = (counterKey, adjustment) => {
    // If trying to increment and total items are already 4, return without doing anything.
    if (adjustment > 0 && totalItems >= 4) return;

    setCounters((prevCounters) => {
      let newValue = prevCounters[counterKey] + adjustment;
      newValue = Math.max(0, newValue);
      newValue = Math.min(4, newValue);

      return {
        ...prevCounters,
        [counterKey]: newValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalItems <= 4) {
      console.log({ name, phone, counters });
    } else {
      alert("The total of all counters cannot exceed 4.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order</h2>

      <div className="card-container">
        {menuOptions.map((option) => (
          <div key={option.key} className="menu-card">
            <img src={option.image} alt="logo" />
            <br />
            <br />

            <div className="details">
              <label className="title">
                {option.title} <br />
              </label>
              <label className="price">${option.price}</label>
            </div>

            <div className="counter">
              <button
                type="button"
                onClick={() => adjustCounter(option.key, -1)}
              >
                -
              </button>
              <span>{counters[option.key]}</span>
              <button
                type="button"
                onClick={() => adjustCounter(option.key, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-form">
        <label>
          Name:
          <br />
        </label>

        <input
          className="input"
          type="text"
          placeholder="Juan Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />

        <label>
          Phone Number:
          <br />
        </label>
        <input
          className="input"
          type="tel"
          value={phone}
          placeholder="248-434-5508"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div>
        {/* Your other form components here */}
        <label>Pickup Date and Time:</label>
        <DatePicker
          required={true}
          selected={pickupDate}
          onChange={(date) => setPickupDate(date)}
          showTimeSelect
          filterDate={isAvailableDate}
          minTime={new Date(0, 0, 0, 17, 0)} // 5pm
          maxTime={new Date(0, 0, 0, 20, 0)} // 8pm
          highlightDates={[today]} // This line highlights the current date
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        {/* Rest of your form */}
      </div>

      <div className="order-overview">
        <div>
          <strong>Total Price: ${totalPrice}</strong>
        </div>
        <br />

        <div>
          <input
            type="checkbox"
            id="pickup-checkbox"
            checked={isPickUp}
            onChange={() => setIsPickUp(!isPickUp)}
            required
          />

          <label htmlFor="pickup-checkbox">
            &emsp;I am aware this is a "pick-up" service only and my order will
            not be delivered.
          </label>
        </div>
        <br />

        <input id="submit-button" type="submit" value="Submit Order" />
      </div>
    </form>
  );
};

export default Menu;
