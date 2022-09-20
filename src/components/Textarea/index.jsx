import { Container } from "./styles";

export function Textarea({
  id,
  name,
  register,
  label,
  borderError = false,
  error,
  ...rest
}) {
  return (
    <Container error={error} borderError={borderError}>
      <label htmlFor={id}>{label}</label>
      <textarea {...rest} name={name} id={id} {...register(name)}></textarea>
    </Container>
  );
}
