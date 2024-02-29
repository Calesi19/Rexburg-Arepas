"use client";
import React, { useEffect, useState } from "react";

// NavBar Component

export default function NavBar() {
  return (
    <div className="py-2 ">
      <div className="container flex items-center justify-between">
        <a href="/">
          <div className="flex items-center">
            <div className="h-10 w-5 bg-[#F8C700]"></div>
            <div className="h-10 w-3 bg-[#002E83]"></div>
            <div className="h-10 w-3 bg-[#C30E2D]"></div>
            <h1 className="ml-5 font-bold">Rexburg Arepas</h1>
            <div className="hidden lg:block">
              <TimeSchedule />
            </div>
          </div>
        </a>

        <nav className="flex items-center gap-8">
          <a href="#" className="link-hover link hidden md:block">
            About
          </a>
          <a href="#" className="link-hover link hidden md:block">
            Pick Up
          </a>
          <a href="#">
            <div className="btn ">Order Status</div>
          </a>
        </nav>
      </div>
    </div>
  );
}

function TimeSchedule() {
  // Check if store is open.
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    if (day === 2 || day === 4) {
      if (hour >= 12 && hour <= 18) {
        setIsOpen(true);
      }
    }
  });

  return (
    <div className="flex items-center gap-4">
      {isOpen ? (
        <div className="badge badge-success mx-4">Open</div>
      ) : (
        <div className="badge badge-error mx-4">Closed</div>
      )}
      <div className=" font-thin">Tue & Thur: 12 PM - 6 PM</div>
    </div>
  );
}
