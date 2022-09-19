import { DashbordCard } from "../../components";
import { DashbordCardContainer } from "./styles";

export function Dashboard() {
  return (
    <DashbordCardContainer>
      <DashbordCard
        title="Quantidade de produtos cadastrados"
        amount={"1.000"}
      />
      <DashbordCard title="Quantidade de produtos vendidos" amount={"500"} />
      <DashbordCard title="Faturamento" amount={"R$: 5000.00"} />
    </DashbordCardContainer>
  );
}
