import { forwardRef } from "react";
import { Container } from "./styles";

function Input({ label, id, error = null, ...rest }, ref) {
  return (
    <Container isRed>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...rest} />
      {!!error && <span>{error.message}</span>}
    </Container>
  );
}

export const InputLabel = forwardRef(Input);
