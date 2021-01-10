/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect, useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";
import { getProduct, cleanForm } from "../../../../actions/edit";

import LongButton from "../../../atoms/BUTTONS/LongButton/LongButton";
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../../templates/NewProductGridTemplate";
import { addAddons, updateAddon } from "../../../../actions/addons";
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

const NewAddonForm = ({ action, id }) => {
  const addonId = id;
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const product = useSelector((state) => state.ProductReducer);
  useEffect(() => {
    dispatch(getProduct(id, collectionsNames.addons));
    return () => dispatch(cleanForm());
  }, [dispatch]);
  const onSubmit = (addon) => {
    const addonToUpdate = {
      id: addonId,
      body: addon,
    };
    if (action === "update") {
      dispatch(updateAddon(addonToUpdate));
    } else {
      dispatch(addAddons(addon));
    }
  };

  return (
    <AddProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Addon Name:</StyledLabel>
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
        <StyledLabel htmlFor="price">Addon price :</StyledLabel>
        <Input
          defaultValue={product && product.price}
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
      {product.message && <ErrorMessage>{product.message}</ErrorMessage>}
    </AddProductGridTemplate>
  );
};

export default NewAddonForm;
