import { Typography, Checkbox, FormControlLabel } from "@mui/material";

// recipe component is responsible for displaying a single recipe
function Recipe({ recipe }) {
  return (
    <div className="recipe" >
      <Typography variant="h4" component="h2" gutterBottom>
        {recipe.name}
      </Typography>

      <Typography variant="h5" component="h3" gutterBottom>
        Ingredients
      </Typography>
      <ul style={{ paddingLeft: '1.5rem' }}>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>
            <FormControlLabel
              control={<Checkbox />}
              label={item}
            />
          </li>
        ))}
      </ul>

      <Typography variant="h5" component="h3" gutterBottom>
        Instructions
      </Typography>
      <ol style={{ paddingLeft: '1.5rem' }}>
        {recipe.instructions.map((step, index) => (
          <li key={index}>
            <Typography variant="body1">{step}</Typography>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;