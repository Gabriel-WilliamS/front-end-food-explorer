import { Container } from "./styles";

export function Section({ title, children }) {
  return (
    <Container>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </Container>
  );
}
