/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import Input from "../components/atoms/Input/Input";
import SmallButton from "../components/atoms/SmallButton/SmallButton";
import LongButton from "../components/atoms/LongButton/LongButton";
import ErrorMessage from "../components/atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../templates/NewProductGridTemplate";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddNewProdcutsForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredients(ingredients.concat(""));
    console.log(ingredients);
  };

  const handleInputRemove = (e, index) => {
    e.preventDefault();
    const ingredientsCopy = [...ingredients];
    ingredientsCopy.splice(index, 1);
    setIngredients(ingredientsCopy);
  };

  return (
    <AddProductGridTemplate>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <h1 htmlFor="productName">product name</h1>
        <Input
          id="productName"
          name="productName"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.productName && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <h1>product price</h1>
        <Input
          id="productPrice"
          name="productPrice"
          type="number"
          step="any"
          ref={register({
            required: true,
          })}
        />
        {errors.productPrice && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <SmallButton id="addIngredient" onClick={(e) => addIngredient(e)}>
          +
        </SmallButton>
        <h1>ingredient</h1>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <Input
              id={"ingredient" + index}
              name={"ingredient" + index}
              ref={register({
                required: true,
              })}
            />
            <SmallButton
              delete
              id={index}
              placeholder={index}
              onClick={(e) => handleInputRemove(e, index)}
            >
              X
            </SmallButton>
          </div>
        ))}
        <LongButton type="submit">add product</LongButton>
      </FormWrapper>
    </AddProductGridTemplate>
  );
};

export default AddNewProdcutsForm;
