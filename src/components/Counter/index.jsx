import { useState } from "react";
import { Container } from "./styles";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";

export function Counter() {
  const [theAmount, setTheAmount] = useState(0);
  return (
    <Container>
      <button
        onClick={() => setTheAmount(theAmount <= 0 ? theAmount : theAmount - 1)}
      >
        <img src={minus} alt="Menos" />
      </button>

      <span>{String(theAmount).padStart(2, "0")}</span>

      <button onClick={() => setTheAmount(theAmount + 1)}>
        <img src={plus} alt="Mais" />
      </button>
    </Container>
  );
}
