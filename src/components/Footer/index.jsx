import logoFooter from "../../assets/svg/logoFooter.svg";
import { Container, ContentWrapper } from "./styled";
export function Footer() {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoFooter} alt="Logo food Explorer" />
        <span>© 2022 - Todos os direitos reservados.</span>
      </ContentWrapper>
    </Container>
  );
}
