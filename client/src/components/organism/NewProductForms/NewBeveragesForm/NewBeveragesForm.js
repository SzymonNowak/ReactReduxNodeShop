/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { connect, useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import LongButton from "../../../atoms/BUTTONS/LongButton/LongButton";
import Input from "../../../atoms/Input/Input";
import { getProduct, cleanForm } from "../../../../actions/edit";

import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../../templates/NewProductGridTemplate";
import { addBeverages, updateBeverage } from "../../../../actions/beverages";

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

const NewBeveragesForm = ({ action, id }) => {
  const beverageId = id;
  const product = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id, collectionsNames.beverages));
    return () => dispatch(cleanForm());
  }, [dispatch]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (beverage) => {
    const beverageToUpdate = {
      id: beverageId,
      body: beverage,
    };
    if (action === "update") {
      dispatch(updateBeverage(beverageToUpdate));
    } else {
      dispatch(addBeverages(beverage));
    }
  };

  return (
    <AddProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Beverages Name:</StyledLabel>
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
        <StyledLabel htmlFor="price">Beverages price :</StyledLabel>
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

export default connect()(NewBeveragesForm);
