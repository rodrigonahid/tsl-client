import { Link, useLocation } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext";

import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  LoginButton,
  WallAppTitle,
} from "./style";

export default function Header() {
  const { isAuthed, setIsAuthed } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("Authorization");
    setIsAuthed(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <Link to="/">
            <WallAppTitle>Wall App</WallAppTitle>
          </Link>
        </HeaderLeft>
        <HeaderRight>
          {isAuthed ? (
            <LoginButton onClick={logout}>
              Logout
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.77816 0.229428C9.48237 -0.0663631 9.00455 -0.0663631 8.70876 0.229428L5 3.9306L1.29124 0.221843C0.99545 -0.0739477 0.517634 -0.0739477 0.221843 0.221843C-0.0739477 0.517634 -0.0739477 0.99545 0.221843 1.29124L3.9306 5L0.221843 8.70876C-0.0739477 9.00455 -0.0739477 9.48237 0.221843 9.77816C0.517634 10.0739 0.99545 10.0739 1.29124 9.77816L5 6.0694L8.70876 9.77816C9.00455 10.0739 9.48237 10.0739 9.77816 9.77816C10.0739 9.48237 10.0739 9.00455 9.77816 8.70876L6.0694 5L9.77816 1.29124C10.0664 1.00303 10.0664 0.517634 9.77816 0.229428Z"
                  fill="#151519"
                />
              </svg>
            </LoginButton>
          ) : (
            <>
              <Link to="/login">
                <span>Log in</span>
              </Link>
              <Link to="/register">
                <LoginButton>Sign Up</LoginButton>
              </Link>
            </>
          )}
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
