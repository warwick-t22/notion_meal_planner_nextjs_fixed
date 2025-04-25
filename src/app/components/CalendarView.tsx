'use client';

import React, { useState, useEffect } from 'react';
import { getAllRecipes, getRecipesByMealType, Recipe } from '../services/recipeService';

interface CalendarViewProps {}

// Helper function to get food emoji based on recipe name
const getFoodEmoji = (recipeName: string): string => {
  const lowerName = recipeName.toLowerCase();
  
  if (lowerName.includes('salmon') || lowerName.includes('fish')) return '🐟';
  if (lowerName.includes('chicken')) return '🍗';
  if (lowerName.includes('beef') || lowerName.includes('steak')) return '🥩';
  if (lowerName.includes('pasta') || lowerName.includes('spaghetti')) return '🍝';
  if (lowerName.includes('salad')) return '🥗';
  if (lowerName.includes('soup')) return '🍲';
  if (lowerName.includes('sandwich')) return '🥪';
  if (lowerName.includes('rice') || lowerName.includes('bowl')) return '🍚';
  if (lowerName.includes('curry')) return '🍛';
  if (lowerName.includes('breakfast') || lowerName.includes('oats')) return '🥣';
  if (lowerName.includes('pancake')) return '🥞';
  if (lowerName.includes('egg')) return '🍳';
  if (lowerName.includes('fruit') || lowerName.includes('berry')) return '🍓';
  if (lowerName.includes('avocado')) return '🥑';
  if (lowerName.includes('banana')) return '🍌';
  if (lowerName.includes('potato')) return '🍠';
  if (lowerName.includes('stir fry') || lowerName.includes('vegetable')) return '🥘';
  
  // Default emoji if no match
  return '🍽️';
};

const CalendarView: React.FC<CalendarViewProps> = () => {
  const [showReviewQueue, setShowReviewQueue] = useState(false);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  // State for recipes from database
  const [breakfastRecipes, setBreakfastRecipes] = useState<Recipe[]>([]);
  const [lunchRecipes, setLunchRecipes] = useState<Recipe[]>([]);
  const [dinnerRecipes, setDinnerRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch recipes when component mounts
  useEffect(() => {
  async function loadRecipes() {
    setLoading(true);
    try {
      // Option 1: Get all recipes and filter by meal type
      const allRecipes = await getAllRecipes();
      // ...rest of your code
    }
    // ...
  }
  
  loadRecipes();
}, []);


  // Function to open recipe modal with selected recipe
  const openRecipeModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipeModal(true);
  };

  return (
    <div>
      {/* Introduction Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Plan your heart-healthy meals for the next two weeks</h2>
          <p className="text-neutral-200">Customize your meal plan based on your preferences and dietary needs</p>
        </div>
        <button className="bg-mintGreen-400 text-white font-medium py-2 px-4 rounded-notion hover:bg-mintGreen-500 transition-colors">
          Generate
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="text-white">Loading recipes from database...</div>
        </div>
      )}

      {/* Admin Review Queue Toggle */}
      <div className="flex justify-end mb-4">
        <button 
          className="bg-royalBlue-400 text-white font-medium py-2 px-4 rounded-notion hover:bg-royalBlue-500 transition-colors flex items-center"
          onClick={() => setShowReviewQueue(!showReviewQueue)}
        >
          <span>{showReviewQueue ? 'Hide Review Queue' : 'Show Review Queue'}</span>
          <span className="ml-2 bg-white text-royalBlue-400 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</span>
        </button>
      </div>

      {/* Recipe Review Queue */}
      {showReviewQueue && (
        <div className="bg-white rounded-notion shadow-sm p-4 mb-6">
          <h2 className="text-xl font-bold text-neutral-800 mb-4">Recipe Review Queue</h2>
          <div className="flex flex-col gap-4">
            <div className="border border-neutral-200 rounded-notion p-4 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-base mb-1">Mediterranean Chickpea Bowl</h3>
                <p className="text-sm text-neutral-600 mb-2">A heart-healthy bowl with chickpeas, vegetables, and olive oil</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs py-1 px-2 bg-mintGreen-50 text-mintGreen-800 rounded-notion">Lunch</span>
                  <span className="text-xs py-1 px-2 bg-neutral-100 text-neutral-800 rounded-notion">20 min</span>
                  <span className="text-xs py-1 px-2 bg-royalBlue-50 text-royalBlue-800 rounded-notion">Vegetarian</span>
                  <span className="text-xs py-1 px-2 bg-royalBlue-50 text-royalBlue-800 rounded-notion">Vegan</span>
                  <span className="text-xs py-1 px-2 bg-royalBlue-50 text-royalBlue-800 rounded-notion">Gluten-Free</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-neutral-700 py-2 px-4 hover:bg-neutral-100 rounded-notion transition-colors">View</button>
                <button className="bg-mintGreen-400 text-white font-medium py-2 px-4 rounded-notion hover:bg-mintGreen-500 transition-colors">Approve</button>
                <button className="bg-red-500 text-white font-medium py-2 px-4 rounded-notion hover:bg-red-600 transition-colors">Reject</button>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-notion p-4 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-base mb-1">Berry Chia Pudding</h3>
                <p className="text-sm text-neutral-600 mb-2">Omega-3 rich breakfast pudding with antioxidant berries</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs py-1 px-2 bg-mintGreen-50 text-mintGreen-800 rounded-notion">Breakfast</span>
                  <span className="text-xs py-1 px-2 bg-neutral-100 text-neutral-800 rounded-notion">10 min</span>
                  <span className="text-xs py-1 px-2 bg-royalBlue-50 text-royalBlue-800 rounded-notion">Vegetarian</span>
                  <span className="text-xs py-1 px-2 bg-royalBlue-50 text-royalBlue-800 rounded-notion">Gluten-Free</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-neutral-700 py-2 px-4 hover:bg-neutral-100 rounded-notion transition-colors">View</button>
                <button className="bg-mintGreen-400 text-white font-medium py-2 px-4 rounded-notion hover:bg-mintGreen-500 transition-colors">Approve</button>
                <button className="bg-red-500 text-white font-medium py-2 px-4 rounded-notion hover:bg-red-600 transition-colors">Reject</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2-Week Calendar View */}
      {!loading && (
        <div className="mt-6">
          {/* Week 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-white">Week 1</h3>
            <div className="grid grid-cols-[2rem_repeat(7,1fr)] gap-2">
              {/* Day Headers */}
              <div></div> {/* Empty cell for alignment */}
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Monday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Tuesday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Wednesday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Thursday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Friday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Saturday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Sunday</div>

              {/* Breakfast Row */}
              <div className="meal-type-label text-white">Breakfast</div>
              {breakfastRecipes.slice(0, 7).map((recipe, index) => (
                <div key={`breakfast-${index}`} className="min-h-24 p-1">
                  <div 
                    className={`recipe-card ${index % 2 === 0 ? 'primary' : 'secondary'} h-full`} 
                    onClick={() => openRecipeModal(recipe)}
                  >
                    <div className="text-2xl my-2 text-center">{getFoodEmoji(recipe.name)}</div>
                    <h4 className="text-sm font-semibold">{recipe.name}</h4>
                  </div>
                </div>
              ))}

              {/* Lunch Row */}
              <div className="meal-type-label text-white">Lunch</div>
              {lunchRecipes.slice(0, 7).map((recipe, index) => (
                <div key={`lunch-${index}`} className="min-h-24 p-1">
                  <div 
                    className={`recipe-card ${index % 2 === 0 ? 'secondary' : 'primary'} h-full`} 
                    onClick={() => openRecipeModal(recipe)}
                  >
                    <div className="text-2xl my-2 text-center">{getFoodEmoji(recipe.name)}</div>
                    <h4 className="text-sm font-semibold">{recipe.name}</h4>
                  </div>
                </div>
              ))}

              {/* Dinner Row */}
              <div className="meal-type-label text-white">Dinner</div>
              {dinnerRecipes.slice(0, 7).map((recipe, index) => (
                <div key={`dinner-${index}`} className="min-h-24 p-1">
                  <div 
                    className={`recipe-card ${index % 2 === 0 ? 'primary' : 'secondary'} h-full`} 
                    onClick={() => openRecipeModal(recipe)}
                  >
                    <div className="text-2xl my-2 text-center">{getFoodEmoji(recipe.name)}</div>
                    <h4 className="text-sm font-semibold">{recipe.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Week 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-white">Week 2</h3>
            <div className="grid grid-cols-[2rem_repeat(7,1fr)] gap-2">
              {/* Day Headers */}
              <div></div> {/* Empty cell for alignment */}
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Monday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Tuesday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Wednesday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Thursday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Friday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Saturday</div>
              <div className="font-semibold text-sm p-2 bg-neutral-50 rounded-notion text-center">Sunday</div>

              {/* Breakfast Row */}
              <div className="meal-type-label text-white">Breakfast</div>
              {[...Array(7)].map((_, i) => (
                <div key={`breakfast-week2-${i}`} className="min-h-24 p-1">
                  <div className="empty-slot h-full">
                    <span>+</span>
                  </div>
                </div>
              ))}

              {/* Lunch Row */}
              <div className="meal-type-label text-white">Lunch</div>
              {[...Array(7)].map((_, i) => (
                <div key={`lunch-week2-${i}`} className="min-h-24 p-1">
                  <div className="empty-slot h-full">
                    <span>+</span>
                  </div>
                </div>
              ))}

              {/* Dinner Row */}
              <div className="meal-type-label text-white">Dinner</div>
              {[...Array(7)].map((_, i) => (
                <div key={`dinner-week2-${i}`} className="min-h-24 p-1">
                  <div className="empty-slot h-full">
                    <span>+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recipe Modal */}
      {showRecipeModal && selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowRecipeModal(false)}>
          <div className="bg-white rounded-notion shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-neutral-200">
              <h2 className="text-xl font-bold">{selectedRecipe.name}</h2>
              <button className="text-2xl text-neutral-500 hover:text-neutral-800" onClick={() => setShowRecipeModal(false)}>×</button>
            </div>
            <div className="p-6">
              {selectedRecipe.image_url && (
                <div className="h-48 bg-neutral-100 rounded-notion flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src={selectedRecipe.image_url} 
                    alt={selectedRecipe.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If image fails to load, show a food emoji instead
                      const target = e.target as HTMLElement;
                      target.outerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl">${getFoodEmoji(selectedRecipe.name)}</div>`;
                    }}
                  />
                </div>
              )}
              
              <p className="text-neutral-700 mb-4">{selectedRecipe.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs py-1 px-2 bg-neutral-100 text-neutral-800 rounded-notion">
                  Prep: {selectedRecipe.preparation_time} min
                </span>
                <span className="text-xs py-1 px-2 bg-neutral-100 text-neutral-800 rounded-notion">
                  Cook: {selectedRecipe.cooking_time} min
                </span>
                <span className="text-xs py-1 px-2 bg-neutral-100 text-neutral-800 rounded-notion">
                  Servings: {selectedRecipe.servings}
                </span>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">Ingredients</h3>
                <div className="whitespace-pre-line">{selectedRecipe.ingredients}</div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Instructions</h3>
                <div className="whitespace-pre-line">{selectedRecipe.instructions}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
