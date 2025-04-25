'use client';

import React from 'react';

const Header = () => {
  return (
    <header className="bg-royalBlue-700 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Heart-Healthy Meal Planner</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white hover:text-mintGreen-300 transition-colors">Home</a></li>
              <li><a href="#" className="text-white hover:text-mintGreen-300 transition-colors">Meal Plans</a></li>
              <li><a href="#" className="text-white hover:text-mintGreen-300 transition-colors">Recipes</a></li>
              <li><a href="#" className="text-white hover:text-mintGreen-300 transition-colors">Shopping Lists</a></li>
              <li><a href="#" className="text-white hover:text-mintGreen-300 transition-colors">About</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-3">
            <button className="text-white bg-royalBlue-600 hover:bg-royalBlue-500 p-2 rounded-notion">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
            <button className="text-white bg-mintGreen-600 hover:bg-mintGreen-500 p-2 rounded-notion">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  ) ;
};

export default Header;

