import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import caretLeft from "../../assets/svg/caretLeft.svg";

export function BackButton({ ...rest }) {
  return (
    <Container onClick={() => useNavigate(-1)} {...rest}>
      <img src={caretLeft} alt="Seta para voltar" />
      Voltar
    </Container>
  );
}
