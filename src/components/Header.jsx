import React from 'react';

export default function Header({ dark, setDark }) {
  return (
    <header className="flex items-center justify-between p-4 bg-brand text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <button
        onClick={() => setDark(!dark)}
        className="px-2 py-1 bg-white text-brand rounded"
      >
        {dark ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}
