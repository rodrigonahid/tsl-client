import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/axios";
import { FormButton, StyledInput } from "../../styles/button";
import { ErrorMessage } from "../../styles/global";

import { FormContainer, FormWrapper, LoginForm, Already } from "./style";

export default function Login() {
  const navigate = useNavigate();
  const { isAuthed, setIsAuthed } = useContext(AuthContext);

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
      .post("/users/token/", { email, password })
      .then((res) => {
        localStorage.setItem("Authorization", res.data.refresh);
        setIsAuthed(true);
        navigate("/");
      })
      .catch(() => setError("Invalid user and/or password"));
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h1>Log into your account</h1>
        <LoginForm>
          <StyledInput
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="text"
          />
          <StyledInput
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="text"
          />
          <FormButton children="Sign In" onClick={handleLogin} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Already>
            <span>Don't have an account?</span>
            <Link to="/register">Sign Up</Link>
          </Already>
        </LoginForm>
      </FormWrapper>
    </FormContainer>
  );
}
