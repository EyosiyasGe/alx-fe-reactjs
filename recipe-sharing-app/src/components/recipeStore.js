import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
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
  filteredRecipes: [],
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  filterRecipes: (titleTerm, ingredientTerm = '', maxCookingTime = Infinity) =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((r) => {
        const matchesTitle = r.title.toLowerCase().includes(titleTerm.toLowerCase());
        const matchesIngredient = ingredientTerm
          ? r.ingredients.toLowerCase().includes(ingredientTerm.toLowerCase())
          : true;
        const matchesTime = r.cookingTime <= maxCookingTime;

        return matchesTitle && matchesIngredient && matchesTime;
      }),
    })),
}));
