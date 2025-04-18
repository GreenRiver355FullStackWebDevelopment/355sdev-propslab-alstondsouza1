import { Typography, Checkbox, FormControlLabel, Divider } from "@mui/material";

// recipe component is responsible for displaying a single recipe
function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <Typography variant="h4" component="h2" gutterBottom>
        {recipe.name}
      </Typography>

      {/* Ingredients section title */}
      <Typography variant="h5" component="h3" gutterBottom>
        Ingredients
      </Typography>

      {/* List of ingredients with checkboxes */}
      <ul style={{ paddingLeft: "1.5rem" }}>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>
            <FormControlLabel control={<Checkbox />} label={item} />
          </li>
        ))}
      </ul>

      {/* Instructions section title */}
      <Typography variant="h5" component="h3" gutterBottom>
        Instructions
      </Typography>
      <ol style={{ paddingLeft: "1.5rem" }}>
        {recipe.instructions.map((step, index) => (
          <li key={index}>
            <Typography variant="body1">{step}</Typography>
          </li>
        ))}
      </ol>

      {/* Optional Glaze Section */}
      {recipe.optionalGlaze && (
        <div className="optional-Glaze" style={{ marginTop: "1.5rem" }}>
          <Divider style={{ margin: "1.5rem 0" }} />
          <Typography variant="h6" gutterBottom>
            Optional Glaze: {recipe.optionalGlaze.name}
          </Typography>

          <Typography variant="subtitle1">Ingredients</Typography>
          <ul style={{ paddingLeft: "1.5rem" }}>
            {recipe.optionalGlaze.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <Typography variant="subtitle1">Instructions</Typography>
          <ol style={{ paddingLeft: "1.5rem" }}>
            {recipe.optionalGlaze.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default Recipe;
