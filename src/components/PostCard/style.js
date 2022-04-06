import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin: 12px 0;
  padding: 16px 24px;
`;

export const CardTop = styled.div``;

export const CardBottom = styled.div``;

export const CardContent = styled.div``;

export const CardProfile = styled.div``;

export const UserName = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.02em;
`;

export const UserContent = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;

  margin-top: 8px;
`;

export const UserPostedAt = styled.span``;
