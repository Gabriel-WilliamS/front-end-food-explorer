import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, LoadingAnimate, RowTableProducts } from "../../components";
import { api } from "../../services/api";
import { Table, TitlePage } from "./styles";

export function Products() {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleNavigateToNewProduct() {
    navigate("/products/new");
  }

  useEffect(() => {
    const fetchFoods = async () => {
      setIsLoading(true);

      const response = await api.get("/foods");
      const foods = response.data;
      setIsLoading(false);
      setFoods(foods);
    };

    fetchFoods();
  }, []);

  return (
    <>
      <TitlePage>
        <h1>Produtos cadastrados</h1>
        <Button name="Cadastrar produto" onClick={handleNavigateToNewProduct} />
      </TitlePage>

      {isLoading ? (
        <LoadingAnimate />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {foods &&
              foods.map((food) => (
                <RowTableProducts
                  key={food.id}
                  id={food.id}
                  product={food.name}
                  price={food.price}
                  category={food.categories[0].categories.name}
                />
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
