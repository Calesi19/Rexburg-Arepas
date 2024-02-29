import React from 'react';
import Hero from '@/components/Hero';
import Ingredients from '@/components/Ingredients';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Ingredients />
    </main>
  );
}


