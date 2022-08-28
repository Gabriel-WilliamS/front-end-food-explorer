import { useProductsOnCart } from "../../hooks/useProductsOnCart";
import { Container } from "./styles";
export function OrdersCard({ orders }) {
  const { productsInCart, setProductsInCart } = useProductsOnCart();
  function handleDeleteOrder() {
    const productsNotDeleted = productsInCart.filter(
      (product) => product.id != orders.id
    );

    localStorage.setItem(
      "@foodExplorer/productsInCart",
      JSON.stringify(productsNotDeleted)
    );

    setProductsInCart(productsNotDeleted);
  }
  return (
    <Container>
      <img src={orders.image} alt="" />
      <div className="content-order">
        <h2>
          {orders.amount} x {orders.name}
          <span>R$ {orders.price}</span>
        </h2>
        <button onClick={handleDeleteOrder}>Excluir</button>
      </div>
    </Container>
  );
}
