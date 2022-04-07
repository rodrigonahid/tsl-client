import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/axios";

import { Container, ErrorMessage } from "../../styles/global";
import { Loading } from "../../styles/loading";
import { LoadingWrapper, VerifyWrapper } from "./style";

export default function VerifyAccount() {
  const navigate = useNavigate();
  const { setIsAuthed } = useContext(AuthContext);

  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const query = searchParams.get("token");
    try {
      const { data } = await api.get("/users/verify-email/?token=" + query);
      console.log(data);
      setResponse(data.message);
      setIsLoading(false);
      setIsAuthed(true);

      setTimeout(() => {
        localStorage.setItem("Authorization", query);
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err);
      setError("Invalid token, please log in again");
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
            <LoadingWrapper>
              <Loading dark />
            </LoadingWrapper>
          </>
        )}
        {response && (
          <>
            <h2>{response}</h2>
            <p>Redirecting</p>
            <LoadingWrapper>
              <Loading dark />
            </LoadingWrapper>
          </>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </VerifyWrapper>
    </Container>
  );
}
