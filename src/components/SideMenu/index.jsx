import { Container, ItemList } from "./styles";
import {
  AiOutlineDashboard,
  AiOutlineShopping,
  AiOutlineBars
} from "react-icons/ai";
import { useNavigate, useMatch } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";

export function SideMenu({ openMenu, setOpenMenu, isActive = false, ...rest }) {
  const navigate = useNavigate();
  const pageIsDashboard = useMatch("/");
  const pageIsProducts = useMatch("/products");
  const pageIsCategories = useMatch("/categories");
  const pageIsIngredients = useMatch("/ingredients");

  function handleNavigateToDashboard() {
    navigate("/");
  }

  function handleNavigateToProducts() {
    navigate("/products");
  }

  function handleNavigateToCategories() {
    navigate("/categories");
  }

  function handleNavigateToIngredients() {
    navigate("/ingredients");
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
                isActive={pageIsCategories}
                onClick={handleNavigateToCategories}
              >
                <AiOutlineBars />
                Categorias
              </ItemList>

              <ItemList
                isActive={pageIsIngredients}
                onClick={handleNavigateToIngredients}
              >
                <GiFruitBowl /> Ingredientes
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
                isActive={pageIsCategories}
                onClick={handleNavigateToCategories}
              >
                <AiOutlineBars />
              </ItemList>

              <ItemList
                isActive={pageIsIngredients}
                onClick={handleNavigateToIngredients}
              >
                <GiFruitBowl />
              </ItemList>
            </>
          )}
        </ul>
      </nav>
    </Container>
  );
}
