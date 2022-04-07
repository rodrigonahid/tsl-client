import { LoginContainer, LoginWrapper } from "../Register/style";
import { UserCreatedContent, UserCreatedTitle } from "./style";

export default function UserCreated() {
  return (
    <LoginContainer>
      <LoginWrapper>
        <UserCreatedTitle>User successfully created</UserCreatedTitle>
        <UserCreatedContent>
          Please, check your email for the verification link. Also check the
          spam box.
        </UserCreatedContent>
      </LoginWrapper>
    </LoginContainer>
  );
}
