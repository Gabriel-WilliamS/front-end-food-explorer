import { Container } from "./styled";

export function Ingredient({ img, name }) {
  return (
    <Container>
      <img src={img} alt={`Ingredient ` + name} />
      <span>{name}</span>
    </Container>
  );
}
