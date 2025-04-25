import { supabase } from '../../lib/supabase';

// Types for our recipe data
export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  instructions: string;
  preparation_time: number;
  cooking_time: number;
  servings: number;
  image_url: string;
  created_at: string;
}

// Get all recipes
export async function getAllRecipes(): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
  
  return data || [];
}

// Get recipe by ID
export async function getRecipeById(id: number): Promise<Recipe | null> {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    return null;
  }
  
  return data;
}

// Create a new recipe
export async function createRecipe(recipe: Omit<Recipe, 'id' | 'created_at'>): Promise<Recipe | null> {
  const { data, error } = await supabase
    .from('recipes')
    .insert([recipe])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating recipe:', error);
    return null;
  }
  
  return data;
}

// Update an existing recipe
export async function updateRecipe(id: number, recipe: Partial<Recipe>): Promise<Recipe | null> {
  const { data, error } = await supabase
    .from('recipes')
    .update(recipe)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating recipe with id ${id}:`, error);
    return null;
  }
  
  return data;
}

// Delete a recipe
export async function deleteRecipe(id: number): Promise<boolean> {
  const { error } = await supabase
    .from('recipes')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting recipe with id ${id}:`, error);
    return false;
  }
  
  return true;
}

// Get recipes by meal type (breakfast, lunch, dinner)
export async function getRecipesByMealType(mealType: string): Promise<Recipe[]> {
  // This assumes you have a meal_type column in your recipes table
  // If not, you'll need to adjust this query or add the column
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .ilike('meal_type', `%${mealType}%`)
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error(`Error fetching recipes with meal type ${mealType}:`, error);
    return [];
  }
  
  return data || [];
}
