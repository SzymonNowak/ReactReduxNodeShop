/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect, useDispatch, useSelector } from "react-redux";
import Input from "../../../atoms/Input/Input";
import { getProduct, cleanForm } from "../../../../actions/edit";

import { useForm } from "react-hook-form";
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../../templates/NewProductGridTemplate";
import { addSauce, updateSauce } from "../../../../actions/sauces";
import LongButton from "../../../atoms/BUTTONS/LongButton/LongButton";
import { collectionsNames } from "../../../../constants/collectionsNames";

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

const NewSauceForm = ({ action, id }) => {
  const sauceId = id;
  const { register, handleSubmit, errors } = useForm();
  const product = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id, collectionsNames.addons));
    return () => dispatch(cleanForm());
  }, [dispatch]);

  const onSubmit = (sauce) => {
    const sauceToUpdate = {
      id: sauceId,
      body: sauce,
    };
    if (action === "update") {
      dispatch(updateSauce(sauceToUpdate));
    } else {
      dispatch(addSauce(sauce));
    }
  };

  return (
    <AddProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Sauce Name:</StyledLabel>
        <Input
          defaultValue={product && product.name}
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
          defaultValue={product && product.name}
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

export default NewSauceForm;
