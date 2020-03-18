import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.orange};
  cursor: pointer;
  width: 120px;
  height: 27px;
  border: 1px solid ${({ theme }) => theme.orange};
  border-radius: 20px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  transition: 0.25s ease-in-out;
  &:focus {
    outline: 0;
  }
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.orange};
  }
`;

export default Button;
