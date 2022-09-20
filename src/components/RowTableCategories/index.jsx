import { useNavigate } from "react-router-dom";
import {
  Container,
  EditButton,
  DeleteButton,
  ButtonsContainer
} from "./styles";

export function RowTableCategories({ id, category, ...rest }) {
  const navigate = useNavigate();

  return (
    <Container>
      <td>{id}</td>
      <td>{category}</td>
      <td>
        <ButtonsContainer>
          <EditButton onClick={() => navigate(`edit/${id}`)}>Editar</EditButton>
          <DeleteButton>Excluir</DeleteButton>
        </ButtonsContainer>
      </td>
    </Container>
  );
}
