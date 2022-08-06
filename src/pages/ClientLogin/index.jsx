import logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { InputLabel } from "../../components/InputLabel";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function ClientLogin() {
  let schema = yup.object().shape({
    password: yup.string().min(6, "No mínimo 6 caracteres")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  function teste(values) {
    console.log(values);
  }

  return (
    <Container>
      <img src={logo} alt="" />

      <form onSubmit={handleSubmit(teste)}>
        <h1> Crie sua conta</h1>

        <InputLabel
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          {...register("name")}
        />
        <InputLabel
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          {...register("email")}
        />
        <InputLabel
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          error={errors.password}
          {...register("password")}
        />

        <Button name="Criar conta" type="submit" />

        <a href="#">Já tenho uma conta</a>
      </form>
    </Container>
  );
}
