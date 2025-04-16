import { recipes } from './data/data.js'
import RecipeContainer from './RecipeContainer.jsx'
import './App.css'

// this component is responsible for displaying the main title and the recipe container
function App() {
  return (
    <>
      <h1>The Recipes Book</h1>
      <RecipeContainer recipes={recipes} />
    </>
  )
}

export default App
