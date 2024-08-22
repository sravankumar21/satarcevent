import React from 'react';
import './App.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image"></div>
        <div className="login-form">
          <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="unique-id" className="block text-lg font-medium">Mail ID</label>
              <input type="text" id="unique-id" className="w-full px-4 py-2 border rounded-md" placeholder="Your Mail ID" />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
