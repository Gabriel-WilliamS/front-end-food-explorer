import logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { InputLabel } from "../../components/InputLabel";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../utils/validations";
import { toast } from "react-toastify";

export function ClientLogin() {
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

  function handleErrors() {
    const toastConfig = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    };
    if (errors.name) {
      toast.error(errors.name.message, toastConfig);
    }
    if (errors.email) {
      toast.error(errors.email.message, toastConfig);
    }

    if (errors.password) {
      toast.error(errors.password.message, toastConfig);
    }
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
        />

        <InputLabel
          label="Email"
          name="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          register={register}
        />
        <InputLabel
          label="Senha"
          name="password"
          placeholder="No mínimo 6 caracteres"
          type="password"
          register={register}
        />

        <Button name="Criar conta" type="submit" onClick={handleErrors} />

        <a href="#">Já tenho uma conta</a>
      </form>
    </Container>
  );
}
