import { useState } from "react/cjs/react.development";
import { api } from "../../services/axios";
import {
  LatestPosts,
  PostButton,
  PostFormBottom,
  PostFormTop,
  PostFormWrapper,
  PostTextArea,
} from "./style";

export default function PostForm() {
  const [content, setContent] = useState("");

  const post = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post("/posts/", { content: content });
    } catch (err) {
      console.log(err);
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
          <PostButton children="Post" onClick={post} />
        </PostFormBottom>
      </PostFormWrapper>
      <LatestPosts>
        <h2>Latest Posts</h2>
      </LatestPosts>
    </>
  );
}
