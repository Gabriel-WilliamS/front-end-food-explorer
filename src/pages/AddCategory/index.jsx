import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackButton, Button, InputLabel, Section } from "../../components";
import { categoryFields } from "../../utils/validations";
import { Container } from "./styles";
import { api } from "../../services/api";
export function AddCategory({ ...rest }) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(categoryFields) });

  const navigate = useNavigate();

  async function handleAddNewCategory(data) {
    try {
      await api.post("/categories", {
        name: data.name.toLowerCase().trim()
      });
      toast.success("Categoria cadastrada com sucesso!");
      navigate("/categories");
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao criar categoria.");
      }
    }
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
