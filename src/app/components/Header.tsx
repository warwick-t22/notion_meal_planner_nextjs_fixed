'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-royalBlue-400 text-white py-4 px-6 shadow-sm">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Heart-Healthy Meal Planner</h1>
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-royalBlue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-royalBlue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
      <nav className="mt-2">
        <ul className="flex justify-end gap-6">
          <li><Link href="#" className="text-white hover:underline py-1">Home</Link></li>
          <li><Link href="#" className="text-white border-b-2 border-white py-1 font-medium">Meal Plans</Link></li>
          <li><Link href="#" className="text-white hover:underline py-1">Recipes</Link></li>
          <li><Link href="#" className="text-white hover:underline py-1">Shopping Lists</Link></li>
          <li><Link href="#" className="text-white hover:underline py-1">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
