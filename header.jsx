// src/components/Header.jsx

import React from 'react';

const Header = ({ title = "Welcome", showBack = false, onBack }) => {
  return (
    <header className="w-full px-4 py-3 bg-white shadow-md flex items-center justify-between">
      {showBack ? (
        <button
          onClick={onBack}
          className="text-gray-600 text-xl font-bold"
          aria-label="Back"
        >
          ←
        </button>
      ) : (
        <div className="w-6" /> // Placeholder to keep spacing consistent
      )}

      <h1 className="text-lg font-semibold text-gray-900 text-center flex-1">
        {title}
      </h1>

      <div className="w-6" /> {/* Placeholder to balance back button spacing */}
    </header>
  );
};

export default Header;
