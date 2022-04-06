import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/axios";
import { FormButton, StyledInput } from "../../styles/button";
import { ErrorMessage } from "../../styles/global";

import { FormContainer, FormWrapper, LoginForm, Already } from "./style";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    setError("");
    e.preventDefault();
    if (!email || !password) {
      return setError("Preencha o formulário");
    }
    api
      .post("/login", { email, password })
      .then((res) => {
        if (res.problem) {
          return setError("Usuário e/ou senha inválidos");
        }
        localStorage.setItem("auth-token", res.data.token);
        loginUser(res.data.token, res.data.user);
        navigate("/");
      })
      .catch((err) => setError(err));
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h1>Entre na sua conta</h1>
        <LoginForm>
          <StyledInput
            onChange={(e) => setEmail(e.target.value)}
            label="E-mail"
            type="text"
          />
          <StyledInput
            onChange={(e) => setPassword(e.target.value)}
            label="Senha"
            type="text"
          />
          <FormButton children="Entrar" onClick={handleLogin} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Already>
            <span>Não possui uma conta?</span>
            <Link to="/register">Cadastre-se</Link>
          </Already>
        </LoginForm>
      </FormWrapper>
    </FormContainer>
  );
}
