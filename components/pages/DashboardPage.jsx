// src/pages/DashboardPage.jsx

import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const DashboardPage = () => {
  const handleLogout = () => {
    alert('You have been logged out!');
    // Logic to clear session and navigate to LoginPage
    // Example: navigate('/login') if using react-router
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-[375px] bg-white shadow-lg rounded-lg overflow-hidden">
        <Header title="Dashboard" />

        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Welcome back!
          </h2>

          <div className="space-y-3">
            <div className="p-4 bg-blue-100 rounded-lg text-blue-800 font-medium">
              ✅ Your tasks are up to date.
            </div>

            <div className="p-4 bg-green-100 rounded-lg text-green-800 font-medium">
              📊 You have 3 new insights.
            </div>

            <div className="p-4 bg-yellow-100 rounded-lg text-yellow-800 font-medium">
              ⚠️ 2 notifications need attention.
            </div>
          </div>

          <div className="mt-6">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
