/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import LongButton from "../../atoms/LongButton/LongButton";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../templates/NewProductGridTemplate";
import { addItem as addItemAction } from "../../../actions/addItemAction";

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
const StyledLongButton = styled(LongButton)`
  margin-top: 30px;
`;

const NewAddonForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (itemContent) => {
    // dispatch(addItemAction(itemContent));
    console.log(itemContent);
  };

  return (
    <AddProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="mealName">Addon Name:</StyledLabel>
        <Input
          id="addonName"
          name="addonName"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.addonName && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <StyledLabel htmlFor="mealPrice">Addon price :</StyledLabel>
        <Input
          id="addonPrice"
          name="addonPrice"
          type="number"
          ref={register({
            required: true,
          })}
        />
        {errors.productPrice && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <StyledLongButton type="submit">add addon</StyledLongButton>
      </FormWrapper>
    </AddProductGridTemplate>
  );
};

export default connect()(NewAddonForm);
