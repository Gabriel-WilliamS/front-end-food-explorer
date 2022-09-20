import { BackButton, Button, InputLabel, Section } from "../../components";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryFields } from "../../utils/validations";
import { toast } from "react-toastify";

export function EditCategory({ ...rest }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(categoryFields) });

  function handleEditCategory(data) {
    toast.success("Categoria editada com sucesso!");
    console.log(data);
  }
  return (
    <Container {...rest}>
      <BackButton />
      <Section title="Editar categoria">
        <form onSubmit={handleSubmit(handleEditCategory)}>
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
