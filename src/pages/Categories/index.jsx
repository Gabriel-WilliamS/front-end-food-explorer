import { Container, Table, TitlePage } from "./styles";
import { Button, LoadingAnimate, Modal } from "../../components";
import { useState, useEffect } from "react";
import { RowTableCategories } from "../../components/";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function Categories({ ...rest }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [categoryDelete, setCategoryDelete] = useState(0);

  const navigate = useNavigate();

  function handleNavigationToNewCategory() {
    navigate("new");
  }

  async function handleDeleteCategory(id) {
    try {
      await api.delete("/categories", {
        data: {
          id: parseInt(id)
        }
      });

      toast.success("Categoria excluida com sucesso!");
      setCategories((oldCategories) =>
        oldCategories.filter((category) => category.id != id)
      );

      setOpenModal(false);
      setCategoryDelete([]);
    } catch (error) {
      setOpenModal(false);

      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao excluir categoria!");
      }
    }
  }

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);

      const { data } = await api.get("/categories");

      setCategories(data);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

  return (
    <Container {...rest}>
      <TitlePage>
        <h1>Categorias cadastradas</h1>
        <Button
          name="Cadastrar categoria"
          onClick={handleNavigationToNewCategory}
        />
      </TitlePage>

      {isLoading ? (
        <LoadingAnimate />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category) => (
                <RowTableCategories
                  key={category.id}
                  id={category.id}
                  category={category.name}
                  setOpenModal={setOpenModal}
                  setCategoryDelete={setCategoryDelete}
                />
              ))}
          </tbody>
        </Table>
      )}

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onHandleDeleteCategory={handleDeleteCategory}
        categoryDelete={categoryDelete}
        setCategoryDelete={setCategoryDelete}
      />
    </Container>
  );
}
