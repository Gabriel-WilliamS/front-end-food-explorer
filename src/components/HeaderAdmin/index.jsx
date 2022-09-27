import { Container, ContentWrapper, SideNav, MenuContent } from "./styles";
import logoImg from "../../assets/svg/logo.svg";
import iconLogoImg from "../../assets/svg/iconLogo.svg";
import signOutImg from "../../assets/svg/signOut.svg";
import { HambMenu } from "..";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function HeaderAdmin({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleNavigateToLogin() {
    signOut();
    navigate("/");
  }

  function handleNavigateToHome() {
    navigate("/");
  }

  return (
    <Container>
      <ContentWrapper>
        <MenuContent>
          <SideNav className={menuOpen ? "menuOpen" : ""} menuOpen={menuOpen}>
            <img
              className="logo"
              src={menuOpen ? logoImg : iconLogoImg}
              alt="Logo food explorer"
              onClick={handleNavigateToHome}
            />
          </SideNav>
          <HambMenu
            className="hambMenu"
            onClick={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
          />
        </MenuContent>
        <div className="container-menu">
          <a onClick={handleNavigateToLogin}>
            <img src={signOutImg} alt="Botão de saida" />
          </a>
        </div>
      </ContentWrapper>
    </Container>
  );
}
