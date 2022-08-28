import { Button, RowTableProducts, PageAdmin } from "../../components";
import { Table, TitlePage } from "./styles";

export function Products() {
  const data = [
    {
      id: 1,
      name: "Salada Ravanella",
      price: "3.57"
    },
    {
      id: 2,
      name: "Spaguetti Gambe",
      price: "9.97"
    },
    {
      id: 3,
      name: "Torradas de Parma",
      price: "10.99"
    },
    {
      id: 4,
      name: "Prugna Pie",
      price: "25.97"
    }
  ];
  return (
    <PageAdmin>
      <TitlePage>
        <h1>Produtos cadastrados</h1> <Button name="Cadastrar produto" />{" "}
      </TitlePage>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((product) => (
              <RowTableProducts
                id={product.id}
                product={product.name}
                price={product.price}
              />
            ))}
        </tbody>
      </Table>
    </PageAdmin>
  );
}
