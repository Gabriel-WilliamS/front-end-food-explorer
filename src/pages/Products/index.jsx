import { useState } from "react";
import {
  Button,
  HeaderAdmin,
  SideMenu,
  RowTableProducts
} from "../../components";
import { Container, ContentWrapper, TitlePage } from "./styles";

export function Products() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <Container>
      <HeaderAdmin menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu openMenu={menuOpen} className={menuOpen ? "menuOpen" : ""} />
      <ContentWrapper>
        <TitlePage>
          <h1>Produtos cadastrados</h1> <Button name="Cadastrar produto" />{" "}
        </TitlePage>
        <table>
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
        </table>
      </ContentWrapper>
    </Container>
  );
}
