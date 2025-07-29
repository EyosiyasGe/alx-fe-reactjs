import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;