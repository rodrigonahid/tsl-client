import styled from "styled-components";

export const VerifyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  padding: 32px;
  border-radius: 8px;

  margin: 48px 0;
  ${({ theme }) => theme.animation.pop}
`;

export const LoadingWrapper = styled.div`
  height: 40px;
  width: 40px;
  margin-top: 24px;
`;

export const Verifying = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    margin-bottom: 24px;
  }
`;
