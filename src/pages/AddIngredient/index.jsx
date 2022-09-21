import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BackButton,
  Button,
  DropZoneInput,
  InputLabel,
  Section
} from "../../components";
import { ingredientsFields } from "../../utils/validations";
import { Container, Form, ProductsContainer, FieldsWrapper } from "./styles";

export function AddIngredient({ ...rest }) {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm({ resolver: yupResolver(ingredientsFields) });

  const navigate = useNavigate();

  function handleNavigateToIngredients() {
    navigate("/ingredients");
  }

  function handleCreateIngredient(data) {
    toast.success("Ingrediente criado com sucesso!");
    console.log(data);

    handleNavigateToIngredients();
  }

  return (
    <Container {...rest}>
      <BackButton />
      <Section title="Cadastrar ingrediente">
        <Form onSubmit={handleSubmit(handleCreateIngredient)}>
          <div>
            <DropZoneInput
              setValue={setValue}
              getValues={getValues}
              setError={setError}
              clearErrors={clearErrors}
              fieldName={"file"}
              error={errors.file}
            />
            <FieldsWrapper>
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
              <div>
                <label htmlFor="products">Produtos com esse ingrediente</label>
                <div>
                  <ProductsContainer>
                    <span>produto1</span>
                  </ProductsContainer>
                </div>
              </div>
            </FieldsWrapper>
          </div>
          <Button name="Salvar edição" />
        </Form>
      </Section>
    </Container>
  );
}
