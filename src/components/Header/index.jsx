import { Container, ContentWrapper } from "./styles";
import logoImg from "../../assets/logo.svg";
import signOut from "../../assets/signOut.svg";
import receipt from "../../assets/receipt.svg";
import search from "../../assets/search.svg";
import { InputIcon } from "../../components";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate("");

  function handleNavigate() {
    navigate("/register");
  }

  return (
    <Container>
      <ContentWrapper>
        <img className="logo" src={logoImg} alt="Logo food explorer" />

        <a href="">Meus favoritos</a>

        <InputIcon image={search} placeholder="Busque pelas opções de pratos" />

        <button>
          <img src={receipt} alt="Receipt Icon" />
          Meus pedidos
        </button>

        <a onClick={handleNavigate}>
          <img src={signOut} alt="Botão de saida" />
        </a>
      </ContentWrapper>
    </Container>
  );
}
