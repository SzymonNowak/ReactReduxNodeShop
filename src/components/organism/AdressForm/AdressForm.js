/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import LongButton from "../../atoms/LongButton/LongButton";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import FormWrapper from "../../atoms/FormWrapper/FormWrapper";

const AdressForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (itemContent) => {
    console.log(itemContent);
  };

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <h1>Name</h1>
        <Input
          id="Name"
          name="Name"
          type="text"
          ref={register({
            required: true,
          })}
        />

        <h1>Secound Name</h1>
        <Input
          id="SecoundName"
          name="SecoundName"
          type="text"
          ref={register({
            required: true,
          })}
        />
        <h1>Phone Number</h1>
        <Input
          id="PhoneNumber"
          name="PhoneNumber"
          type="text"
          ref={register({
            required: true,
          })}
        />
        <h1>Street</h1>
        <Input
          id="Street"
          name="Street"
          type="text"
          step="any"
          ref={register({
            required: true,
          })}
        />
        <h1>Street Number</h1>
        <Input
          id="StreetNumber"
          name="StreetNumber"
          type="text"
          ref={register({
            required: true,
          })}
        />
        <h1>Flat Number</h1>
        <Input
          id="FlatNumber"
          name="FlatNumber"
          type="number"
          ref={register({
            required: true,
          })}
        />
        <h1>floor / key access</h1>
        <Input
          id="floor/keyAccess"
          name="floor/keyAccess"
          type="text"
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
