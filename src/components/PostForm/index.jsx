import { useState } from "react/cjs/react.development";
import { api } from "../../services/axios";
import { ErrorMessage } from "../../styles/global";
import { Loading } from "../../styles/loading";
import {
  ButtonWrapper,
  ErrorWrapper,
  LatestPosts,
  LoadingWrapper,
  PostButton,
  PostFormBottom,
  PostFormTop,
  PostFormWrapper,
  PostTextArea,
} from "./style";

export default function PostForm({ setData, data }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const post = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post("/posts/", { content: content });

      setData([res.data, ...data]);
      setIsLoading(false);
      setContent("");
    } catch (err) {
      setError("Your token has expired, please log in again");
      setIsLoading(false);
    }
  };
  return (
    <>
      <PostFormWrapper>
        <PostFormTop>
          <PostTextArea
            placeholder="Write your wall post..."
            value={content}
            onChange={({ target }) => setContent(target.value)}
          ></PostTextArea>
        </PostFormTop>
        <PostFormBottom>
          <ErrorWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </ErrorWrapper>
          <ButtonWrapper>
            <PostButton onClick={post}>
              Post
              {isLoading && (
                <LoadingWrapper>
                  <Loading />
                </LoadingWrapper>
              )}
            </PostButton>
          </ButtonWrapper>
        </PostFormBottom>
      </PostFormWrapper>

      {/* Horizontal Line - Latest posts */}
      <LatestPosts>
        <h2>Latest Posts</h2>
      </LatestPosts>
    </>
  );
}
