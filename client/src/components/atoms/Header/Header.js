import styled from "styled-components";

export const Header = styled.p`
  margin-top: ${({ theme }) => theme.margin.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
