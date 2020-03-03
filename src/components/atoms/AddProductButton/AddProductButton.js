import styled, { css } from "styled-components";

const AddProductButton = styled.button`
  background-color: #f39c12;
  color: white;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  &:focus {
    outline: 0;
  }
`;

export default AddProductButton;
