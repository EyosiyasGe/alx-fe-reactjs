import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: '1',
      title: 'Spaghetti Bolognese',
      ingredients: 'spaghetti, beef, tomato',
      cookingTime: 30,
      description: 'Classic Italian pasta with meat sauce.',
    },
    {
      id: '2',
      title: 'Grilled Cheese Sandwich',
      ingredients: 'bread, cheese, butter',
      cookingTime: 10,
      description: 'Quick and easy cheesy sandwich.',
    },
    {
      id: '3',
      title: 'Chicken Curry',
      ingredients: 'chicken, curry powder, coconut milk',
      cookingTime: 45,
      description: 'Spicy and creamy chicken curry.',
    },
  ],

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const term = searchTerm.toLowerCase();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term)
      ),
    });
  },

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));
