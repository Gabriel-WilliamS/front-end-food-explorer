import { Container, ContentWrapper } from "./styled";
import { Header, Footer, Ingredient, Counter, Button } from "../../components";
import caretLeft from "../../assets/svg/caretLeft.svg";
import receipt from "../../assets/svg/receipt.svg";
import saladaRavanello from "../../assets/img/salada-ravanello.png";
import alface from "../../assets/img/alface.png";
import tomate from "../../assets/img/tomate.png";
import rabanete from "../../assets/img/rabanete.png";
import paoNann from "../../assets/img/pao-naan.png";
import { useNavigate } from "react-router-dom";

export function Preview() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <button onClick={() => navigate(-1)}>
          <img src={caretLeft} alt="Seta para voltar" />
          Voltar
        </button>
        <main>
          <img src={saladaRavanello} alt="Prato de comida" />
          <div className="content">
            <h1>Spaguetti Gambe</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <div className="ingredients">
              <Ingredient img={alface} name="alface" />
              <Ingredient img={tomate} name="tomate" />
              <Ingredient img={rabanete} name="rabanete" />
              <Ingredient img={paoNann} name="pão naan" />
            </div>
            <div className="price-end-add">
              <span>R$ 25,97</span>
              <Counter />
              <Button className="add-button" name="incluir" icon={receipt} />
            </div>
          </div>
        </main>
      </ContentWrapper>
      <Footer />
    </Container>
  );
}
