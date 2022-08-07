import logo from "../../assets/logo.svg";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../utils/validations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, InputLabel } from "../../components";

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(login)
  });

  function handleLogin(data) {
    console.log(data);
  }

  return (
    <Container>
      <img src={logo} alt="" />

      <form onSubmit={handleSubmit(handleLogin)}>
        <h1>Faça Login</h1>

        <InputLabel
          label="Email"
          name="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          register={register}
          error={errors.email}
        />

        <InputLabel
          label="Senha"
          name="password"
          placeholder="No mínimo 6 caracteres"
          type="password"
          register={register}
          error={errors.password}
        />

        <Button name="Entrar" type="submit" />

        <div>
          <a onClick={() => navigate("/register")}>Criar uma conta</a>
          <a onClick={() => navigate("/admin/register")}>
            Criar uma conta admin
          </a>
        </div>
      </form>
    </Container>
  );
}
