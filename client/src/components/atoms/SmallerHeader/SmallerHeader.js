import styled from "styled-components";
const SmallHeader = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium}; ;
`;
export default SmallHeader;
