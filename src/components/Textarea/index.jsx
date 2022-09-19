import { Container } from "./styles";

export function Textarea({ id, name, register, label, error, ...rest }) {
  return (
    <Container error={error}>
      <label htmlFor={id}>{label}</label>
      <textarea {...rest} name={name} id={id} {...register(name)}></textarea>
    </Container>
  );
}
