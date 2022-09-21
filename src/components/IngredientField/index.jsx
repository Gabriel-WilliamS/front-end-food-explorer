import { Container, IncredientsWrapper } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function IngredientField({
  id,
  label,
  setIngredients,
  ingredients,
  newIngredient,
  setNewIngredient,
  ...rest
}) {
  function handleNewIngredient() {
    setIngredients((oldIngredients) => [...oldIngredients, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(item) {
    setIngredients((oldIngredients) =>
      oldIngredients.filter((ingredient, index) => index != item)
    );
  }
  return (
    <Container {...rest}>
      <label htmlFor={id}>{label}</label>
      <IncredientsWrapper>
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <span key={index}>
              {ingredient}
              <AiOutlineCloseCircle
                onClick={() => handleRemoveIngredient(index)}
              />
            </span>
          ))}

        <div>
          <input
            id={id}
            // type="text"
            list="ingredients"
            placeholder="Adicione um ingrediente"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                handleNewIngredient();
              }
            }}
          />

          <datalist id="ingredients"></datalist>
        </div>
      </IncredientsWrapper>
    </Container>
  );
}
