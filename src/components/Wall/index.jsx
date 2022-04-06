import { useEffect, useState } from "react/cjs/react.development";
import { api } from "../../services/axios";
import { Container } from "../../styles/global";
import formatData from "../../utils/formatData";
import PostCard from "../PostCard";
import { WallWrapper } from "./style";

export default function Wall() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await api.get("/posts/");
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <WallWrapper>
        {!isLoading &&
          data.map((item) => (
            <PostCard
              content={item.content}
              author={item.author}
              createdAt={formatData(item.created_at)}
            />
          ))}
      </WallWrapper>
    </Container>
  );
}
