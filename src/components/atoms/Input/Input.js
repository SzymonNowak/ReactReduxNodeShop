import styled from "styled-components";

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.xs};
  height: 25px;
  border: none;
  border-bottom: 1px solid black;
  font-weight: ${({ theme }) => theme.regular};
  outline: none;
  margin-bottom: 20px;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
  &:focus {
    border-color: orange;

    outline: none;
  }
`;

export default Input;
