import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/svg/logo.svg";
import { Button, InputLabel } from "../../components";
import { api } from "../../services/api";
import { createUserAndAdmin } from "../../utils/validations";
import { Container } from "./styles";
export function ClientRegister() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(createUserAndAdmin)
  });

  async function handleLogin(data) {
    try {
      const response = await api.post("/user-register", {
        name: data.name,
        email: data.email,
        password: data.password
      });

      toast.success(
        `Conta criada com sucesso! Bem vindo ${response.data.name}`
      );
      navigate("/");
    } catch (error) {
      toast.error("Error ao criar a conta.");
    }
  }

  function handleNavigate() {
    navigate(-1);
  }

  return (
    <Container>
      <img src={logo} alt="" />

      <form onSubmit={handleSubmit(handleLogin)}>
        <h1> Crie sua conta</h1>

        <InputLabel
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          name="name"
          register={register}
          error={errors.name}
          textError={true}
          borderError={true}
        />

        <InputLabel
          label="Email"
          name="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          register={register}
          error={errors.email}
          textError={true}
          borderError={true}
        />
        <InputLabel
          label="Senha"
          name="password"
          placeholder="No mínimo 6 caracteres"
          type="password"
          register={register}
          error={errors.password}
          textError={true}
          borderError={true}
        />

        <Button name="Criar conta" type="submit" />

        <a onClick={handleNavigate}>Já tenho uma conta</a>
      </form>
    </Container>
  );
}
