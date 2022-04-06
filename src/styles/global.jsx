import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #1B3953;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  @keyframes animate-pop {
    0% {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8px;
  @media screen and (max-width: 1200px) {
    max-width: 900px;
  }
  @media screen and (max-width: 900px) {
    max-width: 600px;
  }
  @media screen and (max-width: 600px) {
    max-width: 480px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  padding: 36px 0;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
