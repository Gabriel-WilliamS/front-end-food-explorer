import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import caretLeft from "../../assets/svg/caretLeft.svg";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(-1)}>
      <img src={caretLeft} alt="Seta para voltar" />
      Voltar
    </Container>
  );
}
