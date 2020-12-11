import styled, { css } from "styled-components";
const AddIgredientsButton = styled.button`
  line-height: 34px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: ease 0.5s;
  margin-top: ${({ theme }) => theme.margin.s};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }

  ${({ remove }) =>
    remove &&
    css`
      &:hover {
        background-color: red;
      }
    `}
`;

export default AddIgredientsButton;
