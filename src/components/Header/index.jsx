import { Container, ContentWrapper } from "./styles";
import logoImg from "../../assets/svg/logo.svg";
import signOut from "../../assets/svg/signOut.svg";
import receipt from "../../assets/svg/receipt.svg";
import searchImg from "../../assets/svg/search.svg";
import { BsCart3 } from "react-icons/bs";
import { InputIcon, HambMenu } from "../../components";
import { useNavigate, useMatch } from "react-router-dom";
import { useState } from "react";
import { useProductsOnCart } from "../../hooks/useProductsOnCart";

export function Header({ setSearch }) {
  const { productsInCart } = useProductsOnCart();
  const [menuOpen, setmenuOpen] = useState(false);

  const navigate = useNavigate();
  const pageIsHome = useMatch("/");

  function handleNavigateToRegister() {
    navigate("/register");
  }

  function handleNavigateToCart() {
    navigate("/cart");
  }
  function handleNavigateToHome() {
    navigate("/");
  }
  function handleNavigateToFavorites() {
    navigate("/favorites");
  }

  function handleNavigateToOrderHistory() {
    navigate("/order-history");
  }

  return (
    <Container>
      <ContentWrapper>
        <img
          className="logo"
          src={logoImg}
          alt="Logo food explorer"
          onClick={handleNavigateToHome}
        />

        <div className="container-menu">
          <a onClick={handleNavigateToFavorites}>Meus favoritos</a>

          <InputIcon
            image={searchImg}
            placeholder={
              pageIsHome
                ? "Busque pelas opções de pratos"
                : "Para pesquisar volte para a home"
            }
            setSearch={setSearch}
            disabled={pageIsHome ? false : true}
          />

          <div className="cart" onClick={handleNavigateToCart}>
            <BsCart3 size={30} />
            {productsInCart && productsInCart.length > 0 ? (
              <span>{productsInCart.length}</span>
            ) : (
              <></>
            )}
          </div>

          <button onClick={handleNavigateToOrderHistory}>
            <img src={receipt} alt="Receipt Icon" />
            Meus pedidos
          </button>

          <a onClick={handleNavigateToRegister}>
            <img src={signOut} alt="Botão de saida" />
          </a>
        </div>

        <div className={menuOpen ? "menu open" : "menu"}>
          <ul>
            <li>Meus favoritos</li>
            <li>
              <img src={receipt} alt="Receipt Icon" />
              Meus pedidos
            </li>
            <li>
              <img src={signOut} alt="Botão de saida" />
              Sair
            </li>
          </ul>
        </div>
        <HambMenu
          className="hambMenu"
          onClick={() => setmenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
      </ContentWrapper>
    </Container>
  );
}
