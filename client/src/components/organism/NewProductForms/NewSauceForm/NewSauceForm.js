/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import Input from "../../../atoms/Input/Input";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../../templates/NewProductGridTemplate";
import { addSauce } from "../../../../actions/sauces";
import LongButton from "../../../atoms/BUTTONS/LongButton/LongButton";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const StyledLabel = styled.label`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const NewSauceForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (sauce) => {
    dispatch(addSauce(sauce));
  };

  return (
    <AddProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Sauce Name:</StyledLabel>
        <Input
          id="name"
          name="name"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.name && <ErrorMessage>This field is required !</ErrorMessage>}
        <StyledLabel htmlFor="price">Sauce price :</StyledLabel>
        <Input
          id="price"
          name="price"
          type="number"
          ref={register({
            required: true,
          })}
        />
        {errors.price && <ErrorMessage>This field is required !</ErrorMessage>}
        <input type="file" id="img" name="img" accept="image/*"></input>
        <LongButton>Add</LongButton>
      </FormWrapper>
    </AddProductGridTemplate>
  );
};

export default connect()(NewSauceForm);
