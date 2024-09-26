import React from 'react';
import { Link } from 'react-router-dom';
import 'flowbite'; // Import Flowbite components
import doctorImage from "../assets/doctor.jpg"

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-gray-200 to-gray-300 backdrop-blur-lg p-6">
      {/* Wrapper Div for Both Sections */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Section with Image */}
        <div className="md:w-1/2 w-full bg-cover bg-center h-40 lg:h-96 md:h-96" style={{ backgroundImage: `url(${doctorImage})` }}>
          <div className="h-full flex flex-col justify-center items-center text-center text-green-900 p-6 backdrop-blur-sm">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Kiddie Care</h1>
            <p className="text-xs md:text-sm">An online consultation and appointment management application.</p>
          </div>
        </div>

        {/* Right Section with Login Form */}
        <div className="w-full md:w-1/2 p-2 md:p-8">
          <div className="w-full max-w-xs mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-6 text-center">Welcome Back</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Username" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="••••••••" 
                  required 
                />
              </div>

              <div className="flex justify-between items-center">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot your password?</Link>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-900 transition duration-300"
              >
                LOGIN
              </button>
            </form>

            <p className="mt-4 text-sm text-center text-gray-500">
              Don't have an account? 
              <Link to="/RegistrationPage" className="text-blue-600 hover:underline"> Register Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
