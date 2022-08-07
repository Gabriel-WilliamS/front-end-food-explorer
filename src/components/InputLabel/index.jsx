import { Container } from "./styles";

export function InputLabel({ label, id, register, error, name, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input autoComplete="off" id={name} {...register(name)} {...rest} />
      {error && <span>{error.message}</span>}
    </Container>
  );
}
