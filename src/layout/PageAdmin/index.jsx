import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { SideMenu } from "../../components/SideMenu";
import { Container, ContentWrapper } from "./styles";

export function PageAdmin({ ...rest }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container {...rest}>
      <HeaderAdmin menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu openMenu={menuOpen} className={menuOpen ? "menuOpen" : ""} />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  );
}
