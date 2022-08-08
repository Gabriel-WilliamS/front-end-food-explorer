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

        <ul>
          <li>
            <a href="">Meus favoritos</a>
          </li>
          <li>
            <InputIcon
              image={search}
              placeholder="Busque pelas opções de pratos"
            />
          </li>
          <li>
            <button>
              <img src={receipt} alt="Receipt Icon" />
              Meus pedidos
            </button>
          </li>
          <li>
            <a onClick={handleNavigate}>
              <img src={signOut} alt="Botão de saida" />
            </a>
          </li>
        </ul>
      </ContentWrapper>
    </Container>
  );
}
