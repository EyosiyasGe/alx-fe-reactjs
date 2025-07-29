import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ Required: addRecipe
  addRecipe: (newRecipe) => {
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
  },

  // ✅ Required: updateRecipe
  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }));
  },

  // ✅ Required: deleteRecipe
  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
  },

  // ✅ Optional: if you're using setRecipes elsewhere
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;