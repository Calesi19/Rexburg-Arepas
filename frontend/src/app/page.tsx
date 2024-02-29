import React from "react";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Order from "@/components/Order";
import PickUp from "@/components/PickUp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Ingredients />
      <Order />
      <PickUp />
    </main>
  );
}


