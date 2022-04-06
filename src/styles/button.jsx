import styled from "styled-components";

const InputWrapper = styled.span`
  position: relative;
  margin: 16px 0;
  width: 100%;
  p {
    position: absolute;
    top: -14px;
    left: 12px;
    padding: 0 6px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.navyBlue};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    &:focus {
      background: red;
    }
  }
  input {
    height: 36px;
    padding: 0 12px;
    width: 100%;
    background: transparent;
    font-weight: 500;
    border: 2px solid ${({ theme }) => theme.colors.navyBlue};
    border-radius: 8px;
  }
`;

export const StyledInput = ({ label, ...props }) => {
  return (
    <InputWrapper>
      <p>{label}</p>
      <input {...props} />
    </InputWrapper>
  );
};

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.blue};
  padding: 0 16px;
  margin: 12px 0;
  height: 36px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  transform: translate3d(-1px, -1px, 0px);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  &:hover {
    box-shadow: none;
    transform: none;
  }
  color: ${({ theme }) => theme.colors.white};
`;

// Dropdown

export const Dropdown = styled.div`
  position: relative;
  z-index: 10;
  height: 36px;
  margin: 12px 0;
  width: 100%;
  background: transparent;
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.navyBlue};
  border-radius: 8px;
  ${({ active }) => active && `border-radius: 8px 8px 0 0;`}
`;

export const MenuList = styled.ul`
  position: absolute;
  left: -2px;
  top: 30px;
  width: calc(100% + 4px);
  padding: 8px;
  border: 2px solid black;
  border-top: none;
  border-radius: 0 0 8px 8px;
  ${({ active }) => !active && `display: none`};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MenuItems = styled.li``;
