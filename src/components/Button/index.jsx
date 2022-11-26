import { Container } from "./styles";

export function Button({ name, icon, color, ...rest }) {
  console.log(color);
  return (
    <Container color={color} {...rest}>
      {icon && <img className="icon-image" src={icon}></img>}
      {name}
    </Container>
  );
}
