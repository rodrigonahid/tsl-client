import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.white};
  }
`;
