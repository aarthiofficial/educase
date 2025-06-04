// src/components/InputField.jsx

import React from 'react';

const InputField = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-sm ${className}`}
      />
    </div>
  );
};

export default InputField;
