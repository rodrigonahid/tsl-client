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
  grid-template-columns: repeat(3, 1fr);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

export const HeaderCenter = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    display: inline-block;
    margin: 0 16px;
  }
  ul {
    display: flex;
    align-items; center;
    height: 100%;
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
  width: 200px;
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
  &:hover {
    box-shadow: none;
    transform: none;
  }
`;
