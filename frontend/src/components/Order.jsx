"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function OrderCreation() {
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState(0);

  const updateOrder = (item, quantity) => {
    const newOrder = { ...order };
    if (quantity > 0) {
      newOrder[item.name] = { ...item, quantity };
    } else {
      delete newOrder[item.name];
    }
    setOrder(newOrder);

    const newTotal = Object.values(newOrder).reduce(
      (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
      0,
    );
    setTotal(newTotal);
  };
  return (
    <section className="w-full py-16 ">
      <div className="container flex flex-col md:flex-row">
        <div className="grid grid-cols-2 gap-1 md:w-1/2 md:gap-8">
          {MenuItems.map((item) => (
            <Card key={item.name} item={item} updateOrder={updateOrder} />
          ))}
        </div>
        <div className="mt-8 flex flex-col md:mt-0 md:w-1/2 md:p-10 ">
          <h2 className="text-3xl">Order</h2>
          <p className="my-6">
            Ready to pick up in 20 minutes. Each order comes with 3 arepas.
          </p>

          <div className="my-4 flex flex-col justify-between rounded-lg border bg-base-100 p-8 ">
            <div
              id="cart"
              className="flex min-h-[100px] flex-col justify-center"
            >
              {Object.keys(order).length === 0 ? (
                "No Items. Add some to your cart."
              ) : (
                <ul>
                  {Object.values(order).map((item) => (
                    <li key={item.name}>
                      x{item.quantity} {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-8 flex justify-between font-bold">
              <div>Total:</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
          <div className="flex gap-8">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Juan Doe"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your phone number?</span>
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
            <input type="checkbox" defaultChecked className="checkbox" />
            <div>
              I am aware this is a "pick-up" service only and my order will not
              be delivered.
            </div>
          </div>

          <button disabled className="btn btn-primary mt-8 px-10">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({ item, updateOrder }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateOrder(item, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    updateOrder(item, newQuantity);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-8 shadow-md">
      <img src={item.image} alt={item.name} />
      <span className="absolute flex h-[50px] w-[75px] -translate-x-[75px] transform items-center justify-center rounded-lg bg-[#002E83] text-white ">
        ${item.price}
      </span>
      <div>{item.name}</div>
      <div className="flex items-center">
        <button className="btn btn-circle btn-sm" onClick={handleDecrement}>
          <FaMinus />
        </button>
        <div className="w-14 text-center">{quantity}</div>
        <button className="btn btn-circle btn-sm" onClick={handleIncrement}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

const MenuItems = [
  {
    name: "Arepas with Chicken & Salsa",
    price: 13,
    image: "/arepa_chicken_salsa.png",
  },
  {
    name: "Arepas with Chicken",
    price: 12,
    image: "/arepa_chicken.png",
  },
  {
    name: "Arepas with Salsa",
    price: 11,
    image: "/arepa_salsa.png",
  },
  {
    name: "Arepas Plain",
    price: 10,
    image: "/arepa_plain.png",
  },
];
