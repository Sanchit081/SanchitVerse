// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (enabled) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black border border-gray-400 hover:scale-105 transition-all"
    >
      {enabled ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
