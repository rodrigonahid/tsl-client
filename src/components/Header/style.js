import styled from "styled-components";
import { Container } from "../../styles/global";

export const WallAppTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 900px) {
    font-size: 24px;
  }
`;

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.blue};
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled(Container)`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 180px;
  border: none;
  border-radius: 36px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #151519;
  transition: 0.2s;
  transform: translate3d(-1px, -1px, 0px);
  @media screen and (max-width: 600px) {
    width: 120px;
  }
  &:hover {
    box-shadow: none;
    transform: none;
  }
  ${({ logout }) =>
    logout &&
    `
    display: flex;
    svg{
      margin-left: 8px;
    }
    `}
`;

export const LoginLink = styled.div`
  white-space: nowrap;
`;
