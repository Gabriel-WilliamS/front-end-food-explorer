import { Container } from "./styles";

export function SelectOptionInput({
  label,
  id,
  options,
  register,
  error,
  textError = false,
  borderError = false,
  ...rest
}) {
  return (
    <Container borderError={borderError} error={error} {...rest}>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} {...register(id)}>
        <option value={false}>
          {textError && error ? error.message : "Escolha uma opção"}
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </Container>
  );
}
