import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); // get the 'id' from URL
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* You can add EditRecipeForm or DeleteRecipeButton here */}
    </div>
  );
};

export default RecipeDetails;
