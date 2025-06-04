// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    // Simulate login logic
    console.log('Logging in with:', { email, password });

    // Navigate or show success
    alert('Login successful!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-[375px] bg-white shadow-lg rounded-lg overflow-hidden">
        <Header title="Login" />

        <div className="p-6">
          <InputField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
