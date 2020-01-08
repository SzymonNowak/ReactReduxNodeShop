import React from "react";
import styled, { css } from "styled-components";
import Input from "../../atoms/Input/Input";
const Wrapper = styled.div`
  border-left: 8px solid purple;
  z-index: 99;
  position: fixed;
  display: flex;
  padding: 50px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  margin-top: 130px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin-top: 20px;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const NewItemBar = ({ isVisible }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <StyledForm>
        <h2>Add new product</h2>
        <StyledInput id="tittle" placeholder="type name " />
        <StyledInput id="price" placeholder="type price " />
        <StyledInput id="price" placeholder="type price " />
        <StyledTextArea
          id="opis"
          as="textarea"
          placeholder="type description"
        />
      </StyledForm>
    </Wrapper>
  );
};

export default NewItemBar;
