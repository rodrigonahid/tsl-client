import { useState } from "react";

import { FormButton, StyledInput } from "../../styles/button";
import {
  LoginContainer,
  LoginForm,
  LoginWrapper,
  Already,
  LoadingWrapper,
} from "./style";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/axios";
import { ErrorMessage } from "../../styles/global";
import { Loading } from "../../styles/loading";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setIsLoading(false);
      return setError("Fill all fields of the form");
    }
    if (password.length < 8 || confirmPassword.length < 8) {
      setIsLoading(false);
      return setError("Password needs at least 8 characters");
    }
    if (password !== confirmPassword) {
      setIsLoading(false);
      return setError("Passwords doesn't match");
    }
    try {
      await api.post("/users/", { username, email, password });
      setIsLoading(false);
      await navigate("success", { replace: true });
    } catch (err) {
      setIsLoading(false);
      return setError("Invalid user and/or email");
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
          <FormButton children="Entrar" onClick={handleRegister}>
            Register
            {isLoading && (
              <LoadingWrapper>
                <Loading />
              </LoadingWrapper>
            )}
          </FormButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Already>
            <span>Already has an account?</span>
            <Link to="/register">Log in</Link>
          </Already>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
}
