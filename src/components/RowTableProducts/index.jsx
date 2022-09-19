import { useNavigate } from "react-router-dom";
import {
  Container,
  EditButton,
  DeleteButton,
  ButtonsContainer
} from "./styles";

export function RowTableProducts({ id, product, category, price, ...rest }) {
  const navigate = useNavigate();

  return (
    <Container>
      <td>{id}</td>
      <td>{product}</td>
      <td>{category}</td>
      <td>R$: {price}</td>
      <td>
        <ButtonsContainer>
          <EditButton onClick={() => navigate(`edit/${id}`)}>Editar</EditButton>
          <DeleteButton>Excluir</DeleteButton>
        </ButtonsContainer>
      </td>
    </Container>
  );
}
