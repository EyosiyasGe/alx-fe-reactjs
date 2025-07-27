import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';  // ← Import here
import { useRecipeStore } from './store/recipeStore';

function App() {
  const recipes = useRecipeStore((s) => s.recipes);
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    setRecipes(recipes);
  }, [recipes, setRecipes]);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
      <h1>Recipe Finder</h1>
      <AddRecipeForm />  {/* ← Include the component here */}
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
