import styled from "styled-components";
const CartButton = styled.button`
  width: 140px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  position: fixed;
  right: 25px;
  bottom: 15px;
  border-radius: 15px;
  opacity: 0.7;
  z-index: 999;
  transition: ease 0.3s;
  font-size: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

export default CartButton;
