import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 50%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  background-color: white;
  border: 1px solid #f39c12;
  transition: 0.25s ease-in-out;
  outline: none;

  &:focus {
    background-color: white;
  }
  &:hover {
    background-color: #f39c12;
  }
`;

export default ButtonIcon;
