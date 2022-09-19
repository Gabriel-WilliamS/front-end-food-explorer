import { Container, IncredientsWrapper } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

export function IngredientField({ id, label, ...rest }) {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleNewIngredient() {
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(item) {
    setIngredients(ingredients.filter((ingredient, index) => index != item));
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
            type="text"
            placeholder="Adicione um ingrediente"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                handleNewIngredient();
              }
            }}
          />
        </div>
      </IncredientsWrapper>
    </Container>
  );
}
