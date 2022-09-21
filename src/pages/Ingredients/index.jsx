import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, RowTableIngredients, Section } from "../../components";
import { Container, Table, TitlePage } from "./styles";

export function Ingredients({ ...rest }) {
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: "Banana",
      image: "banana.png"
    }
  ]);

  const navigate = useNavigate();

  function handleNavigateToNewIngredients() {
    navigate("new");
  }
  return (
    <Container {...rest}>
      <TitlePage>
        <h1>Ingredientes cadastrados</h1>
        <Button
          name="Cadastrar ingredientes"
          onClick={handleNavigateToNewIngredients}
        />
      </TitlePage>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ingrediente</th>
            <th>Possui imagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ingredients &&
            ingredients.map((ingredient) => (
              <RowTableIngredients
                key={ingredient.id}
                id={ingredient.id}
                name={ingredient.name}
                image={ingredient.image}
              />
            ))}
        </tbody>
      </Table>
    </Container>
  );
}
