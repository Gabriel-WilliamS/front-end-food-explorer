import { useState } from "react";
import { HeaderAdmin, SideMenu } from "../../components";
import { Container, ContentWrapper } from "./styles";

export function Products() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <HeaderAdmin menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu openMenu={menuOpen} className={menuOpen ? "menuOpen" : ""} />
      <ContentWrapper></ContentWrapper>
    </Container>
  );
}
