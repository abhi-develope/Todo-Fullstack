import React from 'react'

const Signup = () => {
    return (
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">Sign Up</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-1 text-white bg-transparent border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
    
            <div>
              <label htmlFor="email" className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 text-white bg-transparent border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-1 text-white bg-transparent border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
    
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </form>
    
          <p className="text-sm text-gray-300 text-center mt-4">
            Already have an account?{' '}
            <button
             
              className="font-medium text-blue-500 hover:underline focus:outline-none"
            >
              Login
            </button>
          </p>
        </div>
      );
    }
    

export default Signup
