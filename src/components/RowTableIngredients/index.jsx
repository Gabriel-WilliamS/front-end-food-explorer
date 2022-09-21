import { useNavigate } from "react-router-dom";
import {
  Container,
  EditButton,
  DeleteButton,
  ButtonsContainer
} from "./styles";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
export function RowTableIngredients({ id, name, image, ...rest }) {
  const navigate = useNavigate();

  return (
    <Container hasImage={image}>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {image ? (
          <div>
            <AiOutlineCheckCircle /> Sim
          </div>
        ) : (
          <div>
            <AiOutlineCloseCircle /> Não
          </div>
        )}
      </td>
      <td>
        <ButtonsContainer>
          <EditButton onClick={() => navigate(`edit/${id}`)}>Editar</EditButton>
          <DeleteButton>Excluir</DeleteButton>
        </ButtonsContainer>
      </td>
    </Container>
  );
}
