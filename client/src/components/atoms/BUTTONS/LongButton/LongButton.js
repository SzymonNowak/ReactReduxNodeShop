import styled from "styled-components";
const LongButton = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: ease 0.5s;
  margin-top: ${({ theme }) => theme.margin.s};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export default LongButton;
