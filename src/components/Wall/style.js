import styled from "styled-components";

export const WallWrapper = styled.div`
  margin: 10vh 0:
  color: white
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 48px;
  div {
    width: 50px;
    height: 50px;
  }
`;

export const NoPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 64px 0;

  h2 {
    max-width: 80%;
    text-align: center;

    color: ${({ theme }) => theme.colors.white};
  }
`;
