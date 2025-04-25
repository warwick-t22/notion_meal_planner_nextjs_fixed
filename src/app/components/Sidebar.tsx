'use client';

import React, { useState } from 'react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside className={`bg-neutral-50 border-r border-neutral-200 h-[calc(100vh-104px)] fixed top-[104px] left-0 overflow-y-auto transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex justify-between items-center p-4 border-b border-neutral-200">
        <h2 className={`font-bold text-neutral-800 ${isCollapsed ? 'hidden' : 'block'}`}>Filters</h2>
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points={isCollapsed ? "9 18 15 12 9 6" : "15 18 9 12 15 6"}></polyline>
          </svg>
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="p-4">
          {/* Meal Types Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-neutral-800">Meal Types</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Breakfast</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Lunch</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Dinner</span>
              </label>
            </div>
          </div>

          {/* Dietary Preferences Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-neutral-800">Dietary Preferences</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>No dietary requirements</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Vegetarian</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Vegan</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Gluten-Free</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Dairy-Free</span>
              </label>
            </div>
          </div>

          {/* Cooking Equipment Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-neutral-800">Cooking Equipment</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Oven</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Stovetop</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Microwave</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Air Fryer</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Slow Cooker</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                <input type="checkbox" className="rounded border-neutral-300 text-mintGreen-400 focus:ring-mintGreen-400" />
                <span>Blender</span>
              </label>
            </div>
          </div>

          {/* Preparation Time Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-neutral-800">Preparation Time</h3>
            <div className="px-2">
              <input 
                type="range" 
                min="15" 
                max="60" 
                step="15" 
                defaultValue="30"
                className="w-full h-2 bg-neutral-200 rounded-notion appearance-none cursor-pointer accent-mintGreen-400"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>Quick (15 min)</span>
                <span>Medium (30 min)</span>
                <span>Slow (60+ min)</span>
              </div>
            </div>
          </div>

          {/* Serving Size Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-sm mb-2 text-neutral-800">Serving Size</h3>
            <select className="w-full p-2 border border-neutral-300 rounded-notion text-sm focus:outline-none focus:border-mintGreen-400 focus:ring-2 focus:ring-mintGreen-400/20">
              <option value="1">1 serving</option>
              <option value="2">2 servings</option>
              <option value="4" selected>4 servings</option>
              <option value="6">6 servings</option>
              <option value="8">8 servings</option>
            </select>
          </div>

          {/* Generate Button */}
          <button className="w-full bg-mintGreen-400 text-white font-medium py-2 px-4 rounded-notion hover:bg-mintGreen-500 transition-colors">
            Generate Meal Plan
          </button>

          {/* Recipe Assistant Section */}
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <h3 className="font-semibold text-sm mb-2 text-neutral-800">Your Recipe Assistant</h3>
            <div className="bg-white rounded-notion shadow-sm h-64 flex flex-col">
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
                <div className="bg-royalBlue-50 p-2 rounded-notion max-w-[85%]">
                  <p className="text-sm">Hello! I can help you find heart-healthy recipes based on your preferences. What kind of meals are you looking for today?</p>
                  <span className="text-xs text-neutral-500 mt-1 block">10:30 AM</span>
                </div>
                <div className="bg-mintGreen-50 p-2 rounded-notion max-w-[85%] self-end">
                  <p className="text-sm">I need some quick breakfast ideas</p>
                  <span className="text-xs text-neutral-500 mt-1 block">10:31 AM</span>
                </div>
                <div className="bg-royalBlue-50 p-2 rounded-notion max-w-[85%]">
                  <p className="text-sm">I found these heart-healthy breakfast options that take 15 minutes or less to prepare:</p>
                  <span className="text-xs text-neutral-500 mt-1 block">10:31 AM</span>
                </div>
              </div>
              <div className="border-t border-neutral-200 p-2 flex">
                <textarea 
                  placeholder="Ask about recipes..." 
                  className="flex-1 resize-none border border-neutral-300 rounded-notion p-2 text-sm focus:outline-none focus:border-mintGreen-400 focus:ring-2 focus:ring-mintGreen-400/20"
                  rows={1}
                ></textarea>
                <button className="ml-2 p-2 bg-mintGreen-400 text-white rounded-notion flex items-center justify-center hover:bg-mintGreen-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3">Recipe suggestions are based on pre-populated recipes and will be reviewed before being added to the database.</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
