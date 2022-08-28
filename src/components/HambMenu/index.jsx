import { useState } from "react";
import { Container } from "./styles";

export function HambMenu({ menuOpen, ...rest }) {
  return (
    <Container {...rest} menuOpen={menuOpen}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}
