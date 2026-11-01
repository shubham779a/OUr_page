import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-brand to-purple-500 bg-clip-text text-transparent animate-pulse">
        Welcome to My Portfolio
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
        I build things for the web. Feel free to chat with my AI assistant below!
      </p>
    </section>
  );
}
