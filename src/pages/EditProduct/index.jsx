import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  BackButton,
  Button,
  DropZoneInput,
  InputLabel,
  Section,
  SelectOptionInput,
  Textarea,
  IngredientField
} from "../../components";
import { productFields } from "../../utils/validations";
import { Container, FieldsWapper, Form } from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";

export function EditProduct({ ...rest }) {
  const [fileName, setFileName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(productFields)
  });

  const categorys = [
    {
      id: 1,
      name: "Pratos principais"
    },
    {
      id: 2,
      name: "Sobremesas"
    },
    {
      id: 3,
      name: "Bebidas"
    }
  ];

  function handleEditProduct(data) {
    if (ingredients.length <= 0) {
      return toast.error("Selecione os ingredientes");
    }
    if (newIngredient) {
      const confirmUser = confirm(
        "Existe um ingrediente que ainda não foi adicionado deseja continuar mesmo assim ?"
      );

      if (!confirmUser) {
        return;
      }
    }
    data.ingredients = ingredients;
    data.price = data.price.toFixed(2);

    console.log(data);
  }

  function handleAddImage(name) {
    setFileName(name);
  }

  return (
    <Container>
      <BackButton />
      <Section title={"Editar produto"}>
        <Form
          onSubmit={handleSubmit(handleEditProduct)}
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              e.preventDefault();
            }
          }}
        >
          <FieldsWapper>
            <div>
              <DropZoneInput
                setValue={setValue}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
                fieldName={"file"}
                error={errors.file}
              />
              <SelectOptionInput
                label="Categoria"
                options={categorys}
                register={register}
                error={errors.category}
                id="category"
                borderError={true}
                textError={true}
              />
              <InputLabel
                label="Preço"
                name="price"
                placeholder="R$ 00.00"
                type="number"
                step="any"
                register={register}
                error={errors.price}
                borderError={true}
              />
            </div>

            <div>
              <InputLabel
                label="Name"
                name="name"
                placeholder="Nome do produto"
                type="text"
                register={register}
                error={errors.name}
                borderError={true}
              />
              <IngredientField
                label="Ingredientes"
                setIngredients={setIngredients}
                ingredients={ingredients}
                newIngredient={newIngredient}
                setNewIngredient={setNewIngredient}
              />
              <Textarea
                label="Descrição"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                register={register}
                name="description"
                error={errors.description}
                borderError={true}
              />
            </div>
          </FieldsWapper>
          <Button name="Salvar edição" />
        </Form>
      </Section>
    </Container>
  );
}
