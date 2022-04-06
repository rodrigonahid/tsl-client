import { Link, useLocation } from "react-router-dom";

import {
  HeaderCenter,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  LoginButton,
} from "./style";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <Link to="/">
            <h1>Wall App</h1>
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
              <span>Entrar</span>
            </Link>
            <Link to="/register">
              <LoginButton>Registrar</LoginButton>
            </Link>
          </>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
