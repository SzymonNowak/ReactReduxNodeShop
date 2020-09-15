import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import NewProductGridTemplate from "../templates/NewProductGridTemplate";
import FormWrapper from "../components/atoms/FormWrapper/FormWrapper";
import Input from "../components/atoms/Input/Input";
import ErrorMessage from "../components/atoms/ErrorMessage/ErrorMessage";
import LongButton from "../components/atoms/LongButton/LongButton";
const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (itemContent) => {
    console.log(itemContent);
  };
  return (
    <NewProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <h1 htmlFor="Login">First Name</h1>
        <Input
          id="Login"
          name="Login"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.Login && <ErrorMessage>This field is required !</ErrorMessage>}
        <h1 htmlFor="Email">Email</h1>
        <Input
          id="Email"
          name="Email"
          type="email"
          ref={register({
            required: true,
          })}
        />
        {errors.Email && <ErrorMessage>This field is required !</ErrorMessage>}

        <h1 htmlFor="Password">Password</h1>
        <Input
          id="Password"
          name="Password"
          type="Password"
          ref={register({
            required: true,
          })}
        />
        {errors.Password && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <h1 htmlFor="ConfirmPassword">Confirm Password</h1>
        <Input
          id="ConfirmPassword"
          name="ConfirmPassword"
          type="password"
          ref={register({
            required: true,
          })}
        />
        {errors.ConfirmPassword && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <LongButton type="submit">Register</LongButton>
      </FormWrapper>
    </NewProductGridTemplate>
  );
};

export default Register;
