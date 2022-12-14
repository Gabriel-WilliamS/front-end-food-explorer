import logo from "../../assets/svg/logo.svg";
import { Button, InputLabel } from "../../components";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserAndAdmin } from "../../utils/validations";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function AdminRegister() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm({
    resolver: yupResolver(createUserAndAdmin)
  });

  function handleLogin(data) {
    try {
      api.post("/admin-register", {
        name: data.name,
        email: data.email,
        password: data.password
      });
      toast.success("Conta criada com sucesso!");
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
        <h1>Crie sua conta Admin</h1>

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
