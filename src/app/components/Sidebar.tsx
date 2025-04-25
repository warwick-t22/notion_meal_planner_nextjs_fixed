'use client';

import React from 'react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside 
      className={`fixed h-screen bg-royalBlue-800 shadow-xl transition-all duration-300 z-10 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-royalBlue-700">
        <h2 className={`font-semibold text-white ${isCollapsed ? 'hidden' : 'block'}`}>Filters</h2>
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded-notion hover:bg-royalBlue-700 text-white"
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          )  : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          ) }
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="p-4">
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-white">Meal Types</h3>
            <div className="space-y-2">
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" defaultChecked />
                Breakfast
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" defaultChecked />
                Lunch
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" defaultChecked />
                Dinner
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-white">Dietary Preferences</h3>
            <div className="space-y-2">
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                No dietary requirements
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Vegetarian
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Vegan
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Gluten-Free
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Dairy-Free
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-white">Cooking Equipment</h3>
            <div className="space-y-2">
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Oven
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Stovetop
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Microwave
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Air Fryer
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Slow Cooker
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 accent-mintGreen-500" />
                Blender
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-white">Preparation Time</h3>
            <input 
              type="range" 
              min="0" 
              max="120" 
              defaultValue="30" 
              className="w-full accent-mintGreen-500"
            />
            <div className="flex justify-between text-xs mt-1 text-white">
              <span>Quick (15 min)</span>
              <span>Medium (30 min)</span>
              <span>Slow (60+ min)</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-white">Serving Size</h3>
            <select className="w-full p-2 rounded-notion border border-royalBlue-600 bg-royalBlue-700 text-white">
              <option>1 serving</option>
              <option>2 servings</option>
              <option>4 servings</option>
              <option>6 servings</option>
              <option>8 servings</option>
            </select>
          </div>
          
          <button className="w-full bg-mintGreen-500 hover:bg-mintGreen-600 text-white font-medium py-2 px-4 rounded-notion transition-colors">
            Generate Meal Plan
          </button>
          
          {/* Your Recipe Assistant section would go here */}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

