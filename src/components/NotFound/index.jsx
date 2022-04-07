import { Container } from "../../styles/global";
import { NotFoundWrapper } from "./style";

export default function NotFound() {
  return (
    <Container>
      <NotFoundWrapper>
        <h2>Page not found</h2>
      </NotFoundWrapper>
    </Container>
  );
}
