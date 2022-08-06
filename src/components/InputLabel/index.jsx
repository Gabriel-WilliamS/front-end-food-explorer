import { Container } from "./styles";

export function InputLabel({ label, id, register, name, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input autoComplete="off" id={name} {...register(name)} {...rest} />
    </Container>
  );
}
