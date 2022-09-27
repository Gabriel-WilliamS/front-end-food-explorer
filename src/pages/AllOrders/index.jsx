import { RowTableOrders, Section } from "../../components";
import { Container } from "./styles";

export function AllOrders() {
  const data = [
    {
      id: 1,
      status: "Pendente",
      code: "00000004",
      details: [
        {
          amount: 2,
          product: "Salada Radish"
        },
        {
          amount: 1,
          product: "Torradas de Parma"
        },
        {
          amount: 3,
          product: "Chá de Canela"
        },
        {
          amount: 2,
          product: "Suco de Maracujá"
        }
      ],

      date: "20/05 às 18h00"
    },
    {
      id: 2,
      status: "Preparando",
      code: "00000003",
      details: [
        {
          amount: 2,
          product: "Prugna Pie"
        },
        {
          amount: 1,
          product: "Peachy pastrie"
        },
        {
          amount: 3,
          product: "Macarons"
        },
        {
          amount: 2,
          product: "Suco de Maracujá"
        }
      ],
      date: "20/05 às 18h00"
    },
    {
      id: 3,
      status: "Entrege",
      code: "00000003",
      details: [
        {
          amount: 2,
          product: "Espresso"
        },
        {
          amount: 1,
          product: "Tè d'autunno"
        },
        {
          amount: 3,
          product: "Chá de Canela"
        },
        {
          amount: 2,
          product: "Suco de Maracujá"
        }
      ],

      date: "20/05 às 18h00"
    }
  ];
  return (
    <Container>
      <Section title="Pedidos">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>N° do pedido</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <RowTableOrders
                key={order.id}
                status={order.status}
                code={order.code}
                date={order.date}
                details={order.details}
              />
            ))}
          </tbody>
        </table>
      </Section>
    </Container>
  );
}
