import { Button, RowTableProducts } from "../../components";
import { Table, TitlePage } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Products() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Salada Ravanella",
      category: "Prato principal",
      price: "3.57"
    }
  ]);

  const navigate = useNavigate();

  function handleNavigateToNewProduct() {
    navigate("/products/new");
  }

  return (
    <>
      <TitlePage>
        <h1>Produtos cadastrados</h1>
        <Button name="Cadastrar produto" onClick={handleNavigateToNewProduct} />
      </TitlePage>
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
          {data &&
            data.map((product) => (
              <RowTableProducts
                key={product.id}
                id={product.id}
                product={product.name}
                price={product.price}
                category={product.category}
              />
            ))}
        </tbody>
      </Table>
    </>
  );
}
