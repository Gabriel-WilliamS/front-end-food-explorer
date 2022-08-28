import { useState } from "react";
import { DashbordCard, HeaderAdmin, SideMenu } from "../../components";
import { Container, ContentWrapper, DashbordCardContainer } from "./styles";

export function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <HeaderAdmin menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu openMenu={menuOpen} className={menuOpen ? "menuOpen" : ""} />
      <ContentWrapper>
        <DashbordCardContainer>
          <DashbordCard
            title="Quantidade de produtos cadastrados"
            amount={"1.000"}
          />
          <DashbordCard
            title="Quantidade de produtos vendidos"
            amount={"500"}
          />
          <DashbordCard title="Faturamento" amount={"R$: 5000.00"} />
        </DashbordCardContainer>
      </ContentWrapper>
    </Container>
  );
}
