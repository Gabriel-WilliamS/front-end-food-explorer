import { Container, ItemList } from "./styles";
import { AiOutlineDashboard, AiOutlineShopping } from "react-icons/ai";
import { useNavigate, useMatch } from "react-router-dom";

export function SideMenu({ openMenu, setOpenMenu, isActive = false, ...rest }) {
  const navigate = useNavigate();
  const pageIsDashboard = useMatch("/");
  const pageIsProducts = useMatch("/products");

  function handleGoToDashboard() {
    navigate("/");
  }
  function handleGoToProducts() {
    navigate("/products");
  }
  return (
    <Container {...rest}>
      <nav>
        <ul>
          {openMenu ? (
            <>
              <ItemList
                isActive={pageIsDashboard}
                onClick={handleGoToDashboard}
              >
                <AiOutlineDashboard /> Resumo
              </ItemList>
              <ItemList isActive={pageIsProducts} onClick={handleGoToProducts}>
                <AiOutlineShopping /> Produtos
              </ItemList>
            </>
          ) : (
            <>
              <ItemList
                isActive={pageIsDashboard}
                onClick={handleGoToDashboard}
              >
                <AiOutlineDashboard />
              </ItemList>
              <ItemList isActive={pageIsProducts} onClick={handleGoToProducts}>
                <AiOutlineShopping />
              </ItemList>
            </>
          )}
        </ul>
      </nav>
    </Container>
  );
}
