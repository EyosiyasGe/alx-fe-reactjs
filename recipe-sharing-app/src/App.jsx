import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail'; 
import { useRecipeStore } from './components/recipeStore';

function Home() {
  const recipes = useRecipeStore((s) => s.recipes);
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    setRecipes(recipes);
  }, [recipes, setRecipes]);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
      <h1>Recipe Finder</h1>
      <RecipeList />
      <AddRecipeForm />
      <SearchBar />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}
