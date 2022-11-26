import { Container, SelectStatus } from "./styles";

export function RowTableOrders({ status, code, details, date, ...rest }) {
  function handleChangeStatus(status, code) {
    console.log(status);
    console.log(code);
  }
  return (
    <Container status={status}>
      <td>
        <SelectStatus
          name="status"
          onChange={(e) => handleChangeStatus(e.target.value, code)}
          defaultValue={status}
          status="Entregue"
        >
          <option value="Pendente">Pendente</option>
          <option value="Preparando">Preparando</option>
          <option value="Entregue">Entregue</option>
        </SelectStatus>
      </td>
      <td>{code}</td>
      <td>
        {details.map((detail, i, details) =>
          details.length - 1 == i
            ? `${detail.amount} x ${detail.product}`
            : `${detail.amount} x ${detail.product}, `
        )}
      </td>
      <td>{date}</td>
    </Container>
  );
}
