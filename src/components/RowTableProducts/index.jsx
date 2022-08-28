import {
  Container,
  EditButton,
  DeleteButton,
  ButtonsContainer
} from "./styles";

export function RowTableProducts({ id, product, price, ...rest }) {
  return (
    <Container>
      <td>{id}</td>
      <td>{product}</td>
      <td>R$: {price}</td>
      <td>
        <ButtonsContainer>
          <EditButton>Editar</EditButton>
          <DeleteButton>Excluir</DeleteButton>
        </ButtonsContainer>
      </td>
    </Container>
  );
}
