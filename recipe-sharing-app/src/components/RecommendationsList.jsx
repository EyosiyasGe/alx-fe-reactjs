import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

export default function RecommendationsList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favoriteRecipeIds || []);

  // Simple logic: recommend recipes NOT in favorites but sharing an ingredient with favorites
  const favoriteRecipes = recipes.filter(r => favoriteIds.includes(r.id));

  const recommended = recipes.filter(r => {
    if (favoriteIds.includes(r.id)) return false; // exclude favorites

    // Recommend if shares ingredient with any favorite
    return favoriteRecipes.some(fav =>
      fav.ingredients.split(',').some(ing => 
        r.ingredients.toLowerCase().includes(ing.trim().toLowerCase())
      )
    );
  });

  if (recommended.length === 0) {
    return <p>No personalized recommendations at this time.</p>;
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommended.map(({ id, title, description }) => (
        <div key={id} style={{ marginBottom: '1rem' }}>
          <h3>
            <Link to={`/recipe/${id}`}>{title}</Link>
          </h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
