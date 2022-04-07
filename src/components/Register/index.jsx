import { useState } from "react";

import { FormButton, StyledInput } from "../../styles/button";
import { LoginContainer, LoginForm, LoginWrapper, Already } from "./style";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/axios";
import { ErrorMessage } from "../../styles/global";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      return setError("Fill all fields of the form");
    }
    if (password.length < 8 || confirmPassword.length < 8) {
      return setError("Password needs at least 8 characters");
    }
    if (password !== confirmPassword) {
      return setError("Passwords doesn't match");
    }
    try {
      await api.post("/users/", { username, email, password });
      await navigate("success", { replace: true });
    } catch (err) {
      return setError("Usuário e/ou senha inválidos");
    }
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <h1>Register a new account</h1>
        <LoginForm>
          <StyledInput
            label="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledInput
            label="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledInput
            label="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormButton children="Entrar" onClick={handleRegister} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Already>
            <span>Já possui uma conta?</span>
            <Link to="/register">Entrar</Link>
          </Already>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
}
