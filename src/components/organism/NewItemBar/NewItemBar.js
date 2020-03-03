import React, {useState} from "react";
import styled, { css } from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { addItem as addItemAction} from '../../../actions/index';
const Wrapper = styled.div`
  border-left: 8px solid #f39c12;
  z-index: 99;
  position: fixed;
  display: flex;
  padding: 50px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
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

const ErrorMessage = styled.p`
    color:red;
    margin-left:20px;

`;

const NewItemBar = ({ isVisible, addItem }) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(addItemAction(data));
  };

  return (
    <Wrapper isVisible={isVisible}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Add new product</h2>
        <StyledInput
          id="tittle"
          name="tittle"
          placeholder="type name "
          ref={register({
            required: true
          })}
        />
        {errors.tittle && <ErrorMessage>This is required </ErrorMessage>}
        <StyledInput
          id="count"
          name="count"
          placeholder="type count "
          ref={register({
            required: true
          })}
        />
        {errors.count && <ErrorMessage>This is required</ErrorMessage>}
        <StyledInput
          id="price"
          name="price"
          placeholder="type price "
          ref={register({
            required: true
          })}
        />
        {errors.price && <ErrorMessage>This is required</ErrorMessage>}
        <StyledTextArea
          name="description"
          id="description"
          as="textarea"
          placeholder="type description"
          ref={register({
            required: true
          })}
        />
        {errors.description && <ErrorMessage>This is required</ErrorMessage>}
        <StyledButton type="submit">Add product</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};


export default connect()(NewItemBar);

