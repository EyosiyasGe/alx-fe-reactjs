import React, { useState } from "react";

function AddRecipeForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit({ title, ingredients, steps });
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Add New Recipe
      </h2>

      {/* Title */}
      <div>
        <label className="block text-md font-medium text-gray-700 mb-1">
          Recipe Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter recipe title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block text-md font-medium text-gray-700 mb-1">
          Ingredients
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          placeholder="List ingredients, separated by commas"
          rows={4}
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label className="block text-md font-medium text-gray-700 mb-1">
          Preparation Steps
        </label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          placeholder="Describe preparation steps"
          rows={4}
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-md shadow hover:bg-indigo-600 transition"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
