import { Container, ItemList } from "./styles";
import {
  AiOutlineDashboard,
  AiOutlineShopping,
  AiOutlineBars,
  AiOutlineShoppingCart
} from "react-icons/ai";
import { useNavigate, useMatch } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";

export function SideMenu({ openMenu, setOpenMenu, isActive = false, ...rest }) {
  const navigate = useNavigate();
  const pageIsDashboard = useMatch("/");
  const pageIsProducts = useMatch("/products");
  const pageIsCategories = useMatch("/categories");
  const pageIsIngredients = useMatch("/ingredients");
  const pageIsOrders = useMatch("/orders");

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
  function handleNavigateToOrders() {
    navigate("/orders");
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
                isActive={pageIsOrders}
                onClick={handleNavigateToOrders}
              >
                <AiOutlineShoppingCart /> Pedidos
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
                isActive={pageIsOrders}
                onClick={handleNavigateToOrders}
              >
                <AiOutlineShoppingCart />
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
