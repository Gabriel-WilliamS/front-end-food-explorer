import {
  BackButton,
  Button,
  InputLabel,
  Section,
  LoadingAnimate
} from "../../components";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryFields } from "../../utils/validations";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export function EditCategory({ ...rest }) {
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(categoryFields) });

  async function handleEditCategory(data) {
    try {
      await api.put(`/categories/${id}`, {
        name: data.name
      });

      toast.success("Categoria editada com sucesso!");
      navigate("/categories");
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao editar categoria.");
      }
    }
  }

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);

      const { data } = await api.get(`/categories/${id}`);
      setCategory(data.name);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

  return (
    <Container {...rest}>
      <BackButton />
      <Section title="Editar categoria">
        {isLoading && category ? (
          <LoadingAnimate />
        ) : (
          <form onSubmit={handleSubmit(handleEditCategory)}>
            <InputLabel
              placeholder="Name"
              id="name"
              name="name"
              label="Nome"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              register={register}
              error={errors.name}
              borderError={true}
              textError={true}
            />
            <Button name="Salvar" />
          </form>
        )}
      </Section>
    </Container>
  );
}
