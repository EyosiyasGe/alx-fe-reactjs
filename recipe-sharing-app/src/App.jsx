import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './RecipeList'
import './App.css'
import EditRecipeForm from './components/EditRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import RecipeDetails from './components/RecipeDetails'
function App() {

  return (
    <>
      <div>
       <AddRecipeForm />
       <RecipeList />
      </div>
    </>
  )
}

export default App
