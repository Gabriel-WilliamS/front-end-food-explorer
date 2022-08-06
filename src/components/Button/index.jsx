import { Container } from "./styles";

export function Button({ name, ...rest }) {
  return <Container {...rest}>{name}</Container>;
}
