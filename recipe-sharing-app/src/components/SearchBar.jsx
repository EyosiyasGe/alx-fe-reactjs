import React, { useState, useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

export default function SearchBar() {
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);
  const [titleTerm, setTitleTerm] = useState('');
  const [ingredientTerm, setIngredientTerm] = useState('');
  const [maxTime, setMaxTime] = useState('');

  useEffect(() => {
    filterRecipes(titleTerm, ingredientTerm, maxTime ? Number(maxTime) : Infinity);
  }, [titleTerm, ingredientTerm, maxTime, filterRecipes]);

  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <input
        type="text"
        placeholder="Search by title"
        value={titleTerm}
        onChange={(e) => setTitleTerm(e.target.value)}
        style={{ flex: '1 1 200px', padding: '10px', fontSize: '1rem' }}
      />
      <input
        type="text"
        placeholder="Filter by ingredient"
        value={ingredientTerm}
        onChange={(e) => setIngredientTerm(e.target.value)}
        style={{ flex: '1 1 200px', padding: '10px', fontSize: '1rem' }}
      />
      <input
        type="number"
        placeholder="Max cooking time (minutes)"
        value={maxTime}
        onChange={(e) => setMaxTime(e.target.value)}
        style={{ flex: '0 0 180px', padding: '10px', fontSize: '1rem' }}
        min="0"
      />
    </div>
  );
}
