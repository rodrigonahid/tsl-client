import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin: 18px 0;
  padding: 18px;
  ${({ theme }) => theme.animation.pop}
`;

export const CardTop = styled.div``;

export const CardBottom = styled.div``;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.02em;
`;

export const UserContent = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;

  margin-top: 12px;
`;

export const UserPostedAt = styled.span`
  margin-left: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.gray};

  &::before {
    content: "·";
    margin-right: 6px;
  }
`;
