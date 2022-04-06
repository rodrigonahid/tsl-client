import {
  CardBottom,
  CardContent,
  CardProfile,
  CardTop,
  CardWrapper,
  UserName,
  UserContent,
  UserPostedAt,
} from "./style";

export default function PostCard({ content, createdAt, author }) {
  return (
    <CardWrapper>
      <CardProfile></CardProfile>
      <CardTop>
        <CardContent>
          <UserName>{author}</UserName>
          <UserPostedAt>{createdAt}</UserPostedAt>
        </CardContent>
      </CardTop>
      <CardBottom>
        <UserContent>{content}</UserContent>
      </CardBottom>
    </CardWrapper>
  );
}
