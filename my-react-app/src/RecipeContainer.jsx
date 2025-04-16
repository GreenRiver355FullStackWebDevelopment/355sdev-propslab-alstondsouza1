import Recipe from './Recipe.jsx';

// this component is responsible for displaying a list of recipes
function RecipeContainer({ recipes }) {
  return (
    <div className="recipe-container">
      {recipes.map((recipe, index) => (<Recipe key={index} recipe={recipe} />))}
    </div>
  );
}

export default RecipeContainer;