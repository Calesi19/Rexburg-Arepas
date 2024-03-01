"use client";

import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";

export default function OrderCreation() {
  const [order, setOrder] = useState({
    "Plain Arepas": 0,
    "Arepas with Chicken": 0,
    "Arepas with Salsa": 0,
    "Arepas with Chicken & Salsa": 0,
  });
  const [total, setTotal] = useState(0);
  const [arepa, setArepa] = useState({
    name: "Plain Arepas",
    price: 10,
    chicken: false,
    sauce: false,
  });

  const updateOrder = (newItem) => {
    const newOrder = { ...order };
    const newTotal = total + newItem.price;

    if (newItem.chicken && newItem.sauce) {
      newOrder["Arepas with Chicken & Salsa"] += 1;
    } else if (newItem.chicken) {
      newOrder["Arepas with Chicken"] += 1;
    } else if (newItem.sauce) {
      newOrder["Arepas with Salsa"] += 1;
    } else {
      newOrder["Plain Arepas"] += 1;
    }

    setOrder(newOrder);
    setTotal(newTotal);
  };

  const toggleSauce = () => {
    const newSauceState = !arepa.sauce;
    const newName = newSauceState
      ? arepa.chicken
        ? "Arepas with Chicken & Salsa"
        : "Arepas with Salsa"
      : arepa.chicken
        ? "Arepas with Chicken"
        : "Plain Arepas";
    setArepa({
      ...arepa,
      sauce: newSauceState,
      price: arepa.price + (newSauceState ? 1 : -1),
      name: newName,
    });
  };

  const toggleChicken = () => {
    const newChickenState = !arepa.chicken;
    const newName = newChickenState
      ? arepa.sauce
        ? "Arepas with Chicken & Salsa"
        : "Arepas with Chicken"
      : arepa.sauce
        ? "Arepas with Salsa"
        : "Plain Arepas";
    setArepa({
      ...arepa,
      chicken: newChickenState,
      price: arepa.price + (newChickenState ? 2 : -2),
      name: newName,
    });
  };

  const addToCart = () => {
    updateOrder(arepa);
  };

  const removeFromCart = (item) => {
    if (order[item] > 0) {
      const newOrder = { ...order };
      newOrder[item] -= 1;
      setOrder(newOrder);

      const itemPrice = item.includes("Chicken & Salsa")
        ? 13
        : item.includes("Chicken")
          ? 12
          : item.includes("Salsa")
            ? 11
            : 10;
      setTotal(total - itemPrice);
    }
  };

  // Check if store is open or closed. If closed, disable the button.

  const orderButton = () => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    if (day === 2 || day === 4) {
      if (hour >= 12 && hour <= 18) {
        return (
          <button className="btn btn-primary mt-8 px-10" onClick={addToCart}>
            Place Order
          </button>
        );
      }
    }

    return (
      <button disabled className="btn btn-primary mt-8 px-10">
        Not Open
      </button>
    );
  };

  const listItems = Object.keys(order)
    .map((key) => {
      return order[key] > 0 ? (
        <div className="flex justify-between">
          <div>
            <span>{order[key] * 3} </span>
            <span>{key}</span>
          </div>
          <button className="" onClick={() => removeFromCart(key)}>
            <FaMinus />
          </button>
        </div>
      ) : null;
    })
    .filter((item) => item !== null);

  return (
    <section className="w-full py-16 ">
      <div className="container flex flex-col md:flex-row">
        <div className="gap-1 md:w-1/2 md:gap-8">
          <Card
            arepa={arepa}
            toggleChicken={toggleChicken}
            toggleSauce={toggleSauce}
            addToCart={addToCart}
          />
        </div>
        <div className="flex flex-col md:w-1/2 md:px-10 ">
          <div className="my-2 flex flex-col justify-between rounded-lg border bg-base-100 p-8 ">
            <div
              id="cart"
              className="flex min-h-[60px] flex-col justify-center"
            >
              {listItems}
            </div>
            <div className="mt-8 flex justify-between font-bold">
              <div>Total:</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
          <div className="flex gap-8">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Juan Doe"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone Number</span>
              </div>
              <input
                type="text"
                placeholder="248-434-5508"
                pattern="[0-9]{10}"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <input type="checkbox" className="checkbox" />
            <div>
              I'm aware this is a "pick-up" service only and my order will not
              be delivered. Payment due with cash or venmo.
            </div>
          </div>
          {orderButton()}
        </div>
      </div>
    </section>
  );
}

function Card({ arepa, toggleChicken, toggleSauce, addToCart }) {
  const getImageSrc = () => {
    if (arepa.chicken && arepa.sauce) {
      return "/arepa_chicken_salsa.png";
    } else if (arepa.chicken) {
      return "/arepa_chicken.png";
    } else if (arepa.sauce) {
      return "/arepa_salsa.png";
    } else {
      return "/arepa_plain.png";
    }
  };
  return (
    <div className="flex h-full w-full flex-col justify-between gap-4 rounded-2xl bg-white p-8 shadow-md">
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <img
          src={getImageSrc()}
          className="aspect-square h-[250px] w-[250px]"
        />
        <div className="flex w-full flex-col gap-2">
          <input
            type="checkbox"
            aria-label="Chicken"
            className="btn"
            onChange={toggleChicken}
          />
          <input
            type="checkbox"
            aria-label="Sauce"
            className="btn"
            onChange={toggleSauce}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="my-8 flex w-full flex-col text-center lg:my-0 lg:text-left">
          <div className="text-3xl">3 {arepa.name}</div>
          <div>${arepa.price.toFixed(2)}</div>
        </div>

        <button className="btn btn-neutral" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
