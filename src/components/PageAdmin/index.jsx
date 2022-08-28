import { useState } from "react";
import { HeaderAdmin } from "../HeaderAdmin";
import { SideMenu } from "../SideMenu";
import { Container, ContentWrapper } from "./styles";

export function PageAdmin({ children, ...rest }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container {...rest}>
      <HeaderAdmin menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu openMenu={menuOpen} className={menuOpen ? "menuOpen" : ""} />
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
}
