import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { api } from "../../services/axios";

import { Container, ErrorMessage } from "../../styles/global";
import { VerifyWrapper } from "./style";

export default function VerifyAccount() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const query = searchParams.get("token");
    try {
      const { data } = await api.get("/users/verify-email/?token=" + query);
      setResponse(data.message);
      localStorage.setItem("Authorization", query);
      setIsLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      setError("Invalid token");
      setIsLoading(false);
    }
  }, []);
  return (
    <Container>
      <VerifyWrapper>
        {isLoading && (
          <>
            <h2>Verifying your account</h2>
            <p>Please, wait a moment</p>
          </>
        )}
        {response && (
          <>
            <h2>{response}</h2>
            <p>Redirecting</p>
          </>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </VerifyWrapper>
    </Container>
  );
}
