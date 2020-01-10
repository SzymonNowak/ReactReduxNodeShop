import React, {useState} from "react";
import styled, { css } from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
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
  margin: 30px 0 50px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const NewItemBar = ({ isVisible }) => {

    const [tittle, setTittle] = useState("");
    const [price, setPrice] = useState("");
    const [count, setCount] = useState("");
    const [description, setDescription] = useState("");

    const handleForm = (e) => {
        
    }
  return (
    <Wrapper isVisible={isVisible}>
      <StyledForm>
        <h2>Add new product</h2>
        <StyledInput
          id="tittle"
          name="tittle"
          placeholder="type name "
          value={tittle}
          onChange={e => setTittle(e.target.value)}
        />
        <StyledInput
          id="count"
          name="count"
          placeholder="type count "
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <StyledInput
          id="price"
          name="price"
          placeholder="type price "
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <StyledTextArea
          id="description"
          as="textarea"
          placeholder="type description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <StyledButton type="submit">Add product</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

export default NewItemBar;
