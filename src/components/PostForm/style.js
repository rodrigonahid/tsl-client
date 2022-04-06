import styled from "styled-components";
import { FormButton } from "../../styles/button";

export const PostFormWrapper = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 32px;
  margin: 24px 0;
  border-radius: 8px;
`;

export const PostFormTop = styled.div`
  display: flex;
`;

export const PostFormBottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PostTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 12px 18px;

  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  border-radius: 8px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const PostButton = styled(FormButton)`
  margin: 16px 0 0 0;
`;

export const LatestPosts = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding-top: 8px;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
