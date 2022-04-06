import { Link, useLocation } from "react-router-dom";

import {
  HeaderCenter,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  LoginButton,
  WallAppTitle,
} from "./style";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <Link to="/">
            <WallAppTitle>Wall App</WallAppTitle>
          </Link>
        </HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight>
          {/* {isLogged ? (
            <LoginButton onClick={logoutUser}>Name</LoginButton>
          ) : (
            <>
              <Link to="/login">
                <span>Entrar</span>
              </Link>
              <Link to="/register">
                <LoginButton>Registrar</LoginButton>
              </Link>
            </>
          )} */}
          <>
            <Link to="/login">
              <span>Sign In</span>
            </Link>
            <Link to="/register">
              <LoginButton>Sign Up</LoginButton>
            </Link>
          </>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
