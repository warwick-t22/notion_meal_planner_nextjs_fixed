'use client';

import React, { useState } from 'react';

interface CalendarViewProps {}

const CalendarView: React.FC<CalendarViewProps> = () => {
  const [showReviewQueue, setShowReviewQueue] = useState(false);
  const [showRecipeModal, setShowRecipeModal] = useState(false);

  return (
    <div>
      {/* Introduction Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-800 mb-1">Plan your heart-healthy meals for the next two weeks</h2>
          <p className="text-neutral-600">Customize your meal plan based on your preferences and dietary needs</p>
        </div>
        <button className="bg-mintGreen-400 text-white font-medium py-2 px-4 rounded-notion hover:bg-mintGreen-500 transition-colors">
          Generate
        </button>
      </div>

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
      <div className="mt-6">
        {/* Week 1 */}
        <div className="mb-8">
          <h3 className="text-base font-semibold p-2 bg-neutral-100 rounded-notion mb-2">Week 1</h3>
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
            <div className="meal-type-label">Breakfast</div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥣</div>
                <h4 className="text-sm font-semibold">Overnight Oats</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍳</div>
                <h4 className="text-sm font-semibold">Veggie Omelette</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥞</div>
                <h4 className="text-sm font-semibold">Whole Grain Pancakes</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍓</div>
                <h4 className="text-sm font-semibold">Berry Smoothie Bowl</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥑</div>
                <h4 className="text-sm font-semibold">Avocado Toast</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥗</div>
                <h4 className="text-sm font-semibold">Fruit & Yogurt Parfait</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍌</div>
                <h4 className="text-sm font-semibold">Banana Oat Muffins</h4>
              </div>
            </div>

            {/* Lunch Row */}
            <div className="meal-type-label">Lunch</div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥗</div>
                <h4 className="text-sm font-semibold">Mediterranean Salad</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍲</div>
                <h4 className="text-sm font-semibold">Lentil Soup</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥙</div>
                <h4 className="text-sm font-semibold">Chickpea Wrap</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍚</div>
                <h4 className="text-sm font-semibold">Quinoa Bowl</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥪</div>
                <h4 className="text-sm font-semibold">Tuna Sandwich</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥘</div>
                <h4 className="text-sm font-semibold">Vegetable Stir Fry</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍝</div>
                <h4 className="text-sm font-semibold">Whole Grain Pasta</h4>
              </div>
            </div>

            {/* Dinner Row */}
            <div className="meal-type-label">Dinner</div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🐟</div>
                <h4 className="text-sm font-semibold">Baked Salmon</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍗</div>
                <h4 className="text-sm font-semibold">Grilled Chicken</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥘</div>
                <h4 className="text-sm font-semibold">Bean Chili</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍠</div>
                <h4 className="text-sm font-semibold">Stuffed Sweet Potatoes</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍛</div>
                <h4 className="text-sm font-semibold">Vegetable Curry</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card secondary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🥣</div>
                <h4 className="text-sm font-semibold">Mushroom Risotto</h4>
              </div>
            </div>
            <div className="min-h-24 p-1">
              <div className="recipe-card primary h-full" onClick={() => setShowRecipeModal(true)}>
                <div className="text-2xl my-2 text-center">🍖</div>
                <h4 className="text-sm font-semibold">Greek Lamb</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Week 2 */}
        <div className="mb-8">
          <h3 className="text-base font-semibold p-2 bg-neutral-100 rounded-notion mb-2">Week 2</h3>
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
            <div className="meal-type-label">Breakfast</div>
            {[...Array(7)].map((_, i) => (
              <div key={`breakfast-${i}`} className="min-h-24 p-1">
                <div className="empty-slot h-full">
                  <span>+</span>
                </div>
              </div>
            ))}

            {/* Lunch Row */}
            <div className="meal-type-label">Lunch</div>
            {[...Array(7)].map((_, i) => (
              <div key={`lunch-${i}`} className="min-h-24 p-1">
                <div className="empty-slot h-full">
                  <span>+</span>
                </div>
              </div>
            ))}

            {/* Dinner Row */}
            <div className="meal-type-label">Dinner</div>
            {[...Array(7)].map((_, i) => (
              <div key={`dinner-${i}`} className="min-h-24 p-1">
                <div className="empty-slot h-full">
                  <span>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recipe Modal */}
      {showRecipeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowRecipeModal(false)}>
          <div className="bg-white rounded-notion shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-neutral-200">
              <h2 className="text-xl font-bold">Baked Salmon with Roasted Vegetables</h2>
              <button className="text-2xl text-neutral-500 hover:text-neutral-800" onClick={() => setShowRecipeModal(false)}>×</button>
            </div>
            <div className="p-6">
              <div className="h-48 bg-neutral-100 rounded-notion flex items-center justify-center text-5xl mb-4">🐟</div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs py-1 px-2 bg-mintGreen-50 text-mintGreen-800 rounded-notion">Dinner</span>
                <span className="text-xs py-1 px-2 bg-neutral-100 text-neutral-800 rounded-notion">35 min</span>
                <span className="text-xs py-1 px-2 bg-royalBlue-50 text-royalBlue-800 rounded-notion">Gluten-Free</span>
                <span className="text-xs py-1 px-2 bg-royalBlue-50 text-royalBlue-800 rounded-notion">Dairy-Free</span>
              </div>
              <p className="text-neutral-600 mb-6">Omega-3 rich dinner that supports cardiovascular health</p>
              
              <div className="mb-6">
                <h3 className="text-base font-bold mb-2">Ingredients</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Salmon fillet (4 oz per serving)</li>
                  <li>Broccoli florets</li>
                  <li>Bell peppers, sliced</li>
                  <li>Extra virgin olive oil</li>
                  <li>Lemon, sliced</li>
                  <li>Garlic cloves, minced</li>
                  <li>Fresh herbs (dill, parsley)</li>
                  <li>Salt and pepper to taste</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-base font-bold mb-2">Instructions</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Preheat oven to 400°F (200°C).</li>
                  <li>Toss vegetables with olive oil, garlic, salt, and pepper.</li>
                  <li>Spread vegetables on a baking sheet and roast for 10 minutes.</li>
                  <li>Season salmon with salt, pepper, and herbs.</li>
                  <li>Place salmon on top of vegetables, add lemon slices.</li>
                  <li>Bake for 12-15 minutes until salmon is cooked through.</li>
                  <li>Garnish with fresh herbs before serving.</li>
                </ol>
              </div>
              
              <div className="mb-6">
                <h3 className="text-base font-bold mb-2">Nutrition Information</h3>
                <div className="grid grid-cols-2 gap-4 bg-neutral-50 p-3 rounded-notion">
                  <div>
                    <p className="text-xs text-neutral-500">Calories</p>
                    <p className="font-medium">350 kcal</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Protein</p>
                    <p className="font-medium">25g</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Carbs</p>
                    <p className="font-medium">20g</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Fat</p>
                    <p className="font-medium">18g</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Fiber</p>
                    <p className="font-medium">6g</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Sodium</p>
                    <p className="font-medium">320mg</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-base font-bold mb-2">Heart-Healthy Benefits</h3>
                <p className="text-neutral-600">This recipe is rich in omega-3 fatty acids from salmon, which may help reduce inflammation and lower risk of heart disease. The vegetables provide fiber, vitamins, and antioxidants that support cardiovascular health. Olive oil contains monounsaturated fats that can help improve cholesterol levels.</p>
              </div>
            </div>
            <div className="border-t border-neutral-200 p-4 flex justify-end gap-2">
              <button className="bg-royalBlue-400 text-white font-medium py-2 px-4 rounded-notion hover:bg-royalBlue-500 transition-colors">Print Recipe</button>
              <button className="bg-mintGreen-400 text-white font-medium py-2 px-4 rounded-notion hover:bg-mintGreen-500 transition-colors">Add to Meal Plan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
