import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackButton, Button, InputLabel, Section } from "../../components";
import { categoryFields } from "../../utils/validations";
import { Container } from "./styles";

export function AddCategory({ ...rest }) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(categoryFields) });
  const navigate = useNavigate();
  function handleAddNewCategory(data) {
    console.log(data);
    toast.success("Categoria cadastrada com sucesso!");
    navigate("/categories");
  }

  return (
    <Container {...rest}>
      <BackButton />
      <Section title="Cadastrar categoria">
        <form onSubmit={handleSubmit(handleAddNewCategory)}>
          <InputLabel
            placeholder="Name"
            id="name"
            name="name"
            label="Nome"
            register={register}
            error={errors.name}
            borderError={true}
            textError={true}
          />

          <Button name="Salvar" />
        </form>
      </Section>
    </Container>
  );
}
