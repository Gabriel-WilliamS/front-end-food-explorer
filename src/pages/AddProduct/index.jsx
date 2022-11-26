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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function AddProduct({ ...rest }) {
  const [fileName, setFileName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [categories, setCategories] = useState([]);
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

  const navigate = useNavigate();

  async function handleCreateProduct(data) {
    if (newIngredient) {
      return toast.warning(
        "Existe um ingrediente que ainda não foi adicionado, remova-o ou adicione para continuar."
      );
    }

    data.price = data.price.toFixed(2);
    console.log(data);

    const fileUploadForm = new FormData();
    fileUploadForm.append("name", data.name);
    fileUploadForm.append("description", data.description);
    fileUploadForm.append("price", data.price);
    fileUploadForm.append("ingredients", data.ingredients);
    fileUploadForm.append("image", data.file);
    fileUploadForm.append("category", data.category);

    try {
      await api.post("/foods", fileUploadForm);
      toast.success("Produto cadastrado com sucesso!");
      navigate("/products");
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao criar categoria.");
      }
    }
  }

  function handleAddImage(name) {
    setFileName(name);
  }

  function handleVerifyFields() {
    if (ingredients.length <= 0) {
      setValue("ingredients", null);
      setError("ingredients", { message: "Selecione algum ingrediente." });
    } else {
      clearErrors(["ingredients"]);
    }
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get("/categories");
      const data = response.data;
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Container>
        <BackButton />
        <Section title={"Cadastrar produto"}>
          <Form
            onSubmit={handleSubmit(handleCreateProduct)}
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
                  options={categories}
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
                  setValue={setValue}
                  getValues={getValues}
                  setError={setError}
                  clearErrors={clearErrors}
                  error={errors.ingredients}
                  borderError={true}
                  name="ingredients"
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
            <Button name="Cadastrar" onClick={handleVerifyFields} />
          </Form>
        </Section>
      </Container>
    </>
  );
}
