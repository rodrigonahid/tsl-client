import { useContext, useEffect, useState } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/axios";
import { Container, ErrorMessage } from "../../styles/global";
import formatData from "../../utils/formatData";
import PostCard from "../PostCard";
import PostForm from "../PostForm";
import { WallWrapper } from "./style";

export default function Wall() {
  const { isAuthed } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(async () => {
    try {
      const { data } = await api.get("/posts/");
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsError("Your token has expired, please log in again");
    }
  }, []);

  return (
    <Container>
      {isAuthed && <PostForm setData={setData} data={data} />}
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
