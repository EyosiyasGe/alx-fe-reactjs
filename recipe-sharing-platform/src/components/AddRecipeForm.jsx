import React, { useState } from "react";

function AddRecipeForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    // If no errors, pass data to parent
    if (Object.keys(newErrors).length === 0) {
      onSubmit({
        title: title.trim(),
        ingredients: ingredients.trim(),
        steps: steps.trim(),
      });
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
      </div>

      <div>
        <label>Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && <p style={{ color: "red" }}>{errors.ingredients}</p>}
      </div>

      <div>
        <label>Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <p style={{ color: "red" }}>{errors.steps}</p>}
      </div>

      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
