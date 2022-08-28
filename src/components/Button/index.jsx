import { Container } from "./styles";

export function Button({ name, icon, ...rest }) {
  return (
    <Container {...rest}>
      {icon && <img className="icon-image" src={icon}></img>}
      {name}
    </Container>
  );
}
