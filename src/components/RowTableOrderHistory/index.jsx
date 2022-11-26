import { Container } from "./styles";

export function RowTableOrderHistory({
  status,
  code,
  details,
  date,
  ...rest
}) {
  console.log(status);
  return (
    <Container status={status}>
      <td>
        <div>
          <div></div>
          {status}
        </div>
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
