/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import SmallButton from "../../atoms/SmallButton/SmallButton";
import LongButton from "../../atoms/LongButton/LongButton";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../templates/NewProductGridTemplate";
import FormWrapper from "../../atoms/FormWrapper/FormWrapper";

const AdressForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (itemContent) => {
    console.log(itemContent);
  };

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        {/* <h1 htmlFor="productName">{path + " name"}</h1> */}
        <h1>Name</h1>
        <Input
          id="productName"
          name="productName"
          type="text"
          ref={register({
            required: true,
          })}
        />

        <h1>Secound Name</h1>
        <Input
          id="productPrice"
          name="productPrice"
          type="number"
          step="any"
          ref={register({
            required: true,
          })}
        />
        <h1>Phone Number</h1>
        <Input
          id="productPrice"
          name="productPrice"
          type="number"
          step="any"
          ref={register({
            required: true,
          })}
        />
        <h1>Street</h1>
        <Input
          id="productPrice"
          name="productPrice"
          type="number"
          step="any"
          ref={register({
            required: true,
          })}
        />
        <h1>Street Number</h1>
        <Input
          id="productPrice"
          name="productPrice"
          type="number"
          step="any"
          ref={register({
            required: true,
          })}
        />
        <h1>Flat Number</h1>
        <Input
          id="productPrice"
          name="productPrice"
          type="number"
          step="any"
          ref={register({
            required: true,
          })}
        />
        <h1>floor / key access</h1>
        <Input
          id="productPrice"
          name="productPrice"
          type="number"
          step="any"
          ref={register({
            required: true,
          })}
        />

        <LongButton type="submit">Order</LongButton>
      </FormWrapper>
    </div>
  );
};

export default AdressForm;
