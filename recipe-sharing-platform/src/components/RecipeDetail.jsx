import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => String(item.id) === id);
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 sm:h-96 object-cover"
        />

        {/* Recipe Content */}
        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.name}
          </h1>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Instructions
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-gray-700 leading-relaxed">
              {recipe.instructions.split("\n").map((step, index) => (
                <p key={index} className="mb-2">
                  {step}
                </p>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <Link
              to="/"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
            >
              ← Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
