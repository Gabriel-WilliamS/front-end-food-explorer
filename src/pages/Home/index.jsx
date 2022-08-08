import { Header } from "../../components";
import { Container, ContentWrapper } from "./styles";

import frutsBanner from "../../assets/frutsBanner.png";
export function Home() {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <div className="banner-content">
          <img src={frutsBanner} alt="Frutas com balachas caindo" />
          <div>
            <p>Sabores inigualáveis</p>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}
