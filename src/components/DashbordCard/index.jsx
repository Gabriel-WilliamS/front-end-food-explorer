import { Container } from "./styles";

export function DashbordCard({ title, amount, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <span>{amount}</span>
    </Container>
  );
}
