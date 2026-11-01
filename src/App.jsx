import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';

export default function App() {
  const [dark, setDark] = React.useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <Header dark={dark} setDark={setDark} />
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <Hero />
        <ChatBot />
      </main>
    </div>
  );
}
