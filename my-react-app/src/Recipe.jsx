function Recipe({ recipe }) {
  return (
    <div className="recipe">
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.description}</p>
        <ul>
            {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <p>Cooking time: {recipe.cookingTime} minutes</p>
        <p>Servings: {recipe.servings}</p>
        <p>Rating: {recipe.rating} stars</p>
    </div>
  );
}

export default Recipe;