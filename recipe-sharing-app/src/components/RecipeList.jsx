import React from 'react';
import useRecipeStore from '../store/recipeStore';

export default function RecipeList() {
  const filtered = useRecipeStore((s) => s.filteredRecipes);

  return (
    <div>
      {filtered.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
}
