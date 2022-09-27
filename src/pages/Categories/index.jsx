import { Container, Table, TitlePage } from "./styles";
import { Button, LoadingAnimate } from "../../components";
import { useState, useEffect } from "react";
import { RowTableCategories } from "../../components/";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Categories({ ...rest }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleNavigationToNewCategory() {
    navigate("new");
  }

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);

      const { data } = await api.get("/categories");

      setCategories(data);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

  return (
    <Container {...rest}>
      <TitlePage>
        <h1>Categorias cadastradas</h1>
        <Button
          name="Cadastrar categoria"
          onClick={handleNavigationToNewCategory}
        />
      </TitlePage>

      {isLoading ? (
        <LoadingAnimate />
      ) : (
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
      )}
    </Container>
  );
}
