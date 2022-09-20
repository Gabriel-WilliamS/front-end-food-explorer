import { Container, Table, TitlePage } from "./styles";
import { Button } from "../../components";
import { useState } from "react";
import { RowTableCategories } from "../../components/";
import { useNavigate } from "react-router-dom";
export function Categories({ ...rest }) {
  const [categories, setCategories] = useState([{ id: 1, name: "Bebidas" }]);

  const navigate = useNavigate();

  function handleNavigationToNewCategory() {
    navigate("new");
  }
  return (
    <Container {...rest}>
      <TitlePage>
        <h1>Categorias cadastradas</h1>
        <Button
          name="Cadastrar categoria"
          onClick={handleNavigationToNewCategory}
        />
      </TitlePage>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category) => (
              <RowTableCategories
                key={category.id}
                id={category.id}
                category={category.name}
              />
            ))}
        </tbody>
      </Table>
    </Container>
  );
}
