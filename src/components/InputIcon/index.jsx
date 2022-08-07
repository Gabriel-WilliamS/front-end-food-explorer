import { Container } from "./styles";

export function InputIcon({ icon: Icon, image, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      {image && <img src={image} />}
      <input {...rest} />
    </Container>
  );
}
