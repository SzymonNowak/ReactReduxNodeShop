/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";

import LongButton from "../../../atoms/BUTTONS/LongButton/LongButton";
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../../templates/NewProductGridTemplate";
import { addAddons } from "../../../../actions/addons";
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

const NewAddonForm = ({ action }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (sauce) => {
    dispatch(addAddons(sauce));
  };

  return (
    <AddProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Addon Name:</StyledLabel>
        <Input
          id="name"
          name="name"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.name && <ErrorMessage>This field is required !</ErrorMessage>}
        <StyledLabel htmlFor="price">Addon price :</StyledLabel>
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
        <LongButton>{action}</LongButton>
      </FormWrapper>
    </AddProductGridTemplate>
  );
};

export default connect()(NewAddonForm);
