import { Container, ItemList } from "./styles";
import {
  AiOutlineDashboard,
  AiOutlineShopping,
  AiOutlineBars
} from "react-icons/ai";
import { useNavigate, useMatch } from "react-router-dom";

export function SideMenu({ openMenu, setOpenMenu, isActive = false, ...rest }) {
  const navigate = useNavigate();
  const pageIsDashboard = useMatch("/");
  const pageIsProducts = useMatch("/products");
  const pageIsCategorys = useMatch("/categories");

  function handleNavigateToDashboard() {
    navigate("/");
  }

  function handleNavigateToProducts() {
    navigate("/products");
  }

  function handleNavigateToCategories() {
    navigate("/categories");
  }

  return (
    <Container {...rest}>
      <nav>
        <ul>
          {openMenu ? (
            <>
              <ItemList
                isActive={pageIsDashboard}
                onClick={handleNavigateToDashboard}
              >
                <AiOutlineDashboard /> Resumo
              </ItemList>

              <ItemList
                isActive={pageIsProducts}
                onClick={handleNavigateToProducts}
              >
                <AiOutlineShopping /> Produtos
              </ItemList>

              <ItemList
                isActive={pageIsCategorys}
                onClick={handleNavigateToCategories}
              >
                <AiOutlineBars />
                Categorias
              </ItemList>
            </>
          ) : (
            <>
              <ItemList
                isActive={pageIsDashboard}
                onClick={handleNavigateToDashboard}
              >
                <AiOutlineDashboard />
              </ItemList>

              <ItemList
                isActive={pageIsProducts}
                onClick={handleNavigateToProducts}
              >
                <AiOutlineShopping />
              </ItemList>

              <ItemList
                isActive={pageIsCategorys}
                onClick={handleNavigateToCategories}
              >
                <AiOutlineBars />
              </ItemList>
            </>
          )}
        </ul>
      </nav>
    </Container>
  );
}
