import styled from "styled-components";
import { Container } from "../../styles/global";

export const FormContainer = styled(Container)`
  max-width: 600px;
  padding: 8vh 10px;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  padding: 36px;
  border-radius: 8px;
  ${({ theme }) => theme.animation.pop}
  h1 {
    margin-bottom: 36px;
    @media screen and (max-width: 900px) {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 900px) {
    padding: 24px 18px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  input {
    width: 100%;
  }
`;

export const Already = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  a {
    color: ${({ theme }) => theme.colors.blue};
    margin-left: 12px;
  }
`;
