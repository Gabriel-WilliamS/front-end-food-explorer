import { Container } from "./styles";

export function InputIcon({ icon: Icon, image, setSearch, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      {image && <img src={image} />}
      <input {...rest} onChange={(e) => setSearch(e.target.value)} />
    </Container>
  );
}
