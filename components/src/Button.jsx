// src/components/Button.jsx

import React from 'react';

const Button = ({
  type = 'button',
  onClick,
  children,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 px-4 rounded-lg text-white font-medium text-center
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400
        transition duration-200 ease-in-out ${className}`}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
