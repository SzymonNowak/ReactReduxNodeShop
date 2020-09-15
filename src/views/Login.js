import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import NewProductGridTemplate from "../templates/NewProductGridTemplate";
import FormWrapper from "../components/atoms/FormWrapper/FormWrapper";
import Input from "../components/atoms/Input/Input";
import ErrorMessage from "../components/atoms/ErrorMessage/ErrorMessage";
import LongButton from "../components/atoms/LongButton/LongButton";
const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (itemContent) => {
    console.log(itemContent);
  };
  return (
    <NewProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <h1 htmlFor="Login">login</h1>
        <Input
          id="Login"
          name="Login"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.productName && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <h1 htmlFor="Password">Password</h1>
        <Input
          id="Password"
          name="Password"
          type="password"
          ref={register({
            required: true,
          })}
        />
        {errors.productName && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <LongButton type="submit">Login</LongButton>
      </FormWrapper>
    </NewProductGridTemplate>
  );
};

export default Login;
