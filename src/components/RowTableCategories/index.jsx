import { useNavigate } from "react-router-dom";
import {
  Container,
  EditButton,
  DeleteButton,
  ButtonsContainer
} from "./styles";

export function RowTableCategories({
  id,
  setOpenModal,
  category,
  setCategoryDelete
}) {
  const navigate = useNavigate();

  async function handleToOpenModal() {
    setOpenModal((oldState) => !oldState);
    setCategoryDelete(id);
  }

  return (
    <Container>
      <td>{id}</td>
      <td>{category}</td>
      <td>
        <ButtonsContainer>
          <EditButton onClick={() => navigate(`edit/${id}`)}>Editar</EditButton>
          <DeleteButton onClick={handleToOpenModal}>Excluir</DeleteButton>
        </ButtonsContainer>
      </td>
    </Container>
  );
}
