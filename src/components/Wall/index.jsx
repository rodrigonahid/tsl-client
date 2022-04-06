import { useEffect, useState } from "react/cjs/react.development";
import { api } from "../../services/axios";
import { Container, ErrorMessage } from "../../styles/global";
import formatData from "../../utils/formatData";
import PostCard from "../PostCard";
import { WallWrapper } from "./style";

export default function Wall() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(async () => {
    try {
      const { data } = await api.get("/posts/");
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(err.message);
    }
  }, []);

  return (
    <Container>
      <WallWrapper>
        {!isLoading &&
          data.map((item) => (
            <PostCard
              key={item.id}
              content={item.content}
              author={item.author_username}
              createdAt={formatData(item.created_at)}
            />
          ))}
        {isError && <ErrorMessage>{isError}</ErrorMessage>}
      </WallWrapper>
    </Container>
  );
}
