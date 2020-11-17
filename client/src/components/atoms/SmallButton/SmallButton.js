import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: ${(props) => (props.delete ? "red" : "orange")};
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  border: 1px solid;
  border-color: ${(props) => (props.delete ? "red" : "orange")};
  outline: none;
  border-radius: 20px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  transition: 0.25s ease-in-out;
  &:hover {
    color: white;
    background-color: ${(props) => (props.delete ? "red" : "orange")};
  }
`;

export default Button;
