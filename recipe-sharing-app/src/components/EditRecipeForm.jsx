import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore'; // Adjust path as needed

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();

  const recipe = recipes.find((r) => r.id.toString() === id);

  const [formData, setFormData] = useState({
    title: recipe?.title || '',
    ingredients: recipe?.ingredients || '',
    instructions: recipe?.instructions || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ required
    updateRecipe(id, formData); // ✅ updates via Zustand
    navigate(`/recipe/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <label>
        Title:
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Ingredients:
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Instructions:
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
