import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // Recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Make sure data.json is in public folder
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => String(item.id) === id);
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Loading recipe...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.name}</h1>

      <h2 className="text-xl font-semibold mt-6">Ingredients:</h2>
      <ul className="list-disc list-inside space-y-1 mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Instructions:</h2>
      <p className="mt-2 text-gray-700 whitespace-pre-line">
        {recipe.instructions}
      </p>
    </div>
  );
}

export default RecipeDetail;
