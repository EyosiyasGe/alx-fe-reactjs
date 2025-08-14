import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Recipe List</h1>

      {/* Example recipe card */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold">Chocolate Cake</h2>
        <p className="text-gray-600 mb-2">
          A delicious and moist chocolate cake recipe.
        </p>

        {/* Navigation link to the recipe page */}
        <Link
          to="/recipes/chocolate-cake"
          className="text-blue-500 hover:underline"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
