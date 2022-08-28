import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useState } from "react";

import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";
export function ProductCardSlider({
  product,
  onAddProductOnCart,
  onAddProductFavorite
}) {
  const [productsLike, setProductsLike] = useState(false);
  const [theAmount, setTheAmount] = useState(1);

  const navigate = useNavigate();
  function handleAddProductOnCart() {
    const productNew = {
      ...product,
      amount: theAmount
    };

    onAddProductOnCart(productNew);
  }

  function handleFavoriteProduct() {
    const productFavorite = {
      ...product,
      isFavorited: productsLike
    };

    onAddProductFavorite(productFavorite);
    setProductsLike(!productsLike);
  }
  return (
    <>
      {productsLike ? (
        <BsHeartFill
          className="heart-icon like"
          onClick={handleFavoriteProduct}
        />
      ) : (
        <BsHeart className="heart-icon" onClick={handleFavoriteProduct} />
      )}

      <img
        src={product.image}
        alt={`Imagem do produto ${product.name}`}
        onClick={() => navigate("/product")}
      />
      <strong>{product.name}</strong>
      <p>{product.description}</p>
      <span>R$ {product.price}</span>
      <div>
        <div className="counter">
          <button
            onClick={() =>
              setTheAmount(theAmount <= 1 ? theAmount : theAmount - 1)
            }
          >
            <img src={minus} alt="Menos" />
          </button>

          <span>{String(theAmount).padStart(2, "0")}</span>

          <button onClick={() => setTheAmount(theAmount + 1)}>
            <img src={plus} alt="Mais" />
          </button>
        </div>
        <Button name="incluir" onClick={handleAddProductOnCart} />
      </div>
    </>
  );
}
