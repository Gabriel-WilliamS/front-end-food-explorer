import { Container, ContentWrapper, Content } from "./styles";
import {
  Header,
  Footer,
  OrdersCard,
  InputLabel,
  Button
} from "../../components";

import pixImg from "../../assets/svg/pix.svg";
import creditCardImg from "../../assets/svg/creditCard.svg";
import QRCode from "../../assets/svg/QRCode.svg";
import receipt from "../../assets/svg/receipt.svg";
import caretLeft from "../../assets/svg/caretLeft.svg";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { creditCard } from "../../utils/validations";
import { useProductsOnCart } from "../../hooks/useProductsOnCart";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const [pixPaymentMethod, setPixPaymentMethod] = useState(true);
  const { productsInCart } = useProductsOnCart();
  const navigate = useNavigate();

  let total = 0;
  for (let product of productsInCart) {
    total = total + Number(product.price) * Number(product.amount);
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(creditCard)
  });

  function handlePayment(data) {
    console.log(data);
  }

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <button onClick={() => navigate(-1)}>
          <img src={caretLeft} alt="Seta para voltar" />
          Voltar
        </button>

        <Content>
          <div className="container-orders">
            <h2>Meu carrinho</h2>
            <div className="orders">
              <SimpleBar
                forceVisible="y"
                autoHide={false}
                style={{ maxHeight: 400, maxWidth: 444 }}
              >
                {productsInCart &&
                  productsInCart.map((product) => (
                    <OrdersCard key={product.id} orders={product} />
                  ))}
              </SimpleBar>
            </div>
            <strong>Total: R$ {total.toFixed(2)}</strong>
          </div>
          <div className="container-payment">
            <h2>Pagamento</h2>
            <div className="payment">
              <button
                className={pixPaymentMethod ? "selected" : ""}
                onClick={() => setPixPaymentMethod(!pixPaymentMethod)}
              >
                <img src={pixImg} alt="Imagem do pix" />
                Pix
              </button>
              <button
                className={!pixPaymentMethod ? "selected" : ""}
                onClick={() => setPixPaymentMethod(!pixPaymentMethod)}
              >
                <img src={creditCardImg} alt="Imagem cartão de crédito" />
                Crédito
              </button>
            </div>

            {pixPaymentMethod ? (
              <div className="paymentMethodPix">
                <img src={QRCode} alt="" />
                <Button name="Finalizar pagamento" icon={receipt} />
              </div>
            ) : (
              <div className="paymentMethodCard">
                <form onSubmit={handleSubmit(handlePayment)}>
                  <InputLabel
                    label="Número do Cartão"
                    name="numberCard"
                    placeholder="0000 0000 0000 0000"
                    register={register}
                    error={errors.numberCard}
                  />

                  <div className="col-2">
                    <InputLabel
                      label="Validade"
                      name="validate"
                      placeholder="04/25"
                      register={register}
                      error={errors.validate}
                    />
                    <InputLabel
                      label="CVC"
                      name="cvc"
                      placeholder="04/25"
                      register={register}
                      error={errors.cvc}
                    />
                  </div>

                  <Button name="Finalizar pagamento" icon={receipt} />
                </form>
              </div>
            )}
          </div>
        </Content>
      </ContentWrapper>

      <Footer />
    </Container>
  );
}
