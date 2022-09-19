import { Container } from "./styles";

export function InputLabel({
  label,
  id,
  register,
  error,
  name,
  textError = false,
  borderError = false,
  ...rest
}) {
  return (
    <Container error={error} borderError={borderError}>
      <label htmlFor={name}>{label}</label>
      <input autoComplete="off" id={name} {...register(name)} {...rest} />
      {textError && error && <span>{error.message}</span>}
    </Container>
  );
}
