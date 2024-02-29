// Import Babel
import React from "react";

// NavBar Component

export default function NavBar() {
  return (
    <div className="py-2 ">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-5 bg-[#F8C700]"></div>
          <div className="h-10 w-3 bg-[#002E83]"></div>
          <div className="h-10 w-3 bg-[#C30E2D]"></div>
          <h1 className="ml-5 font-bold">Rexburg Arepas</h1>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#" class="link-hover link hidden md:block">
            About
          </a>
          <a href="#" class="link-hover link hidden md:block">
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
