import styled from "styled-components";

export const Loading = styled.div`
  border: 3px solid
    ${({ theme, dark }) => (dark ? theme.colors.black : theme.colors.white)};
  border-top: 3px solid transparent;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation: spin 1.5s linear infinite;
`;
