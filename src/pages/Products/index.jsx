import { Button, RowTableProducts } from "../../components";
import { Table, TitlePage } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Products() {
  // const data = [
  //   {
  //     id: 1,
  //     name: "Salada Ravanella",
  //     price: "3.57"
  //   },
  //   {
  //     id: 2,
  //     name: "Spaguetti Gambe",
  //     price: "9.97"
  //   },
  //   {
  //     id: 3,
  //     name: "Torradas de Parma",
  //     price: "10.99"
  //   },
  //   {
  //     id: 4,
  //     name: "Prugna Pie",
  //     price: "25.97"
  //   }
  // ];

  const [data, setData] = useState();

  const navigate = useNavigate();

  function handleNavigateToNewProduct() {
    navigate("/products/new");
  }

  return (
    <>
      <TitlePage>
        <h1>Produtos cadastrados</h1>{" "}
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
              />
            ))}
        </tbody>
      </Table>
    </>
  );
}
