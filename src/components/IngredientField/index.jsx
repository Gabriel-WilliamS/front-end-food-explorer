import { Container, IncredientsWrapper } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

export function IngredientField({
  id,
  label,
  setIngredients,
  ingredients,
  newIngredient,
  setNewIngredient,
  setValue,
  getValues,
  setError,
  clearErrors,
  name,
  borderError = false,
  error,
  ...rest
}) {
  const ingredientsTeste = ["ovo", "alface", "carne"];
  async function handleNewIngredient() {
    if (!newIngredient) {
      return;
    }

    if (ingredients.length > 0) {
      const newIngredientAlreadyExists = ingredients.find(
        (ingredient) => ingredient === newIngredient
      );

      if (newIngredientAlreadyExists) {
        return toast.warning("Esse ingrediente já está na lista!");
      }
    }
    setIngredients((oldIngredients) => [...oldIngredients, newIngredient]);

    let items = [newIngredient];

    if (getValues(name)) {
      items = await getValues(name);
      items = [...items, newIngredient];
    } else {
      items = [newIngredient];
    }

    setValue(name, items, {
      shouldValidate: true
    });

    clearErrors([name]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(item) {
    setIngredients((oldIngredients) =>
      oldIngredients.filter((ingredient) => ingredient != item)
    );

    let items = getValues(name);

    items = items.filter((ingredient) => ingredient != item);

    setValue(name, items, {
      shouldValidate: true
    });

    if (ingredients.length == 1) {
      setError("ingredients", { message: "Selecione algum ingrediente." });
    }
  }
  return (
    <Container {...rest}>
      <label htmlFor={id}>{label}</label>
      <IncredientsWrapper error={error} borderError={borderError}>
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <span key={index}>
              {ingredient}
              <AiOutlineCloseCircle
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            </span>
          ))}

        <div>
          <input
            id={id}
            // type="text"
            list="ingredients"
            placeholder="Adicione um ingrediente"
            onChange={(e) => setNewIngredient(e.target.value.toLowerCase())}
            value={newIngredient}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                handleNewIngredient();
              }
            }}
          />

          <datalist id="ingredients">
            {ingredientsTeste &&
              ingredientsTeste.map((ingredient) => (
                <option value={ingredient} />
              ))}
          </datalist>
        </div>
      </IncredientsWrapper>
    </Container>
  );
}
