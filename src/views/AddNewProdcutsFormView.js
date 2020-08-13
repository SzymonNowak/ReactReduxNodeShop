/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";

import AddProductGridTemplate from "../templates/NewProductGridTemplate";

const StyledButton = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: inline-block;
`;
const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.warning};
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.bold};
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="productName">product name:</label>
        <input
          id="productName"
          name="productName"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.productName && (
          <ErrorMessage>This field is required </ErrorMessage>
        )}
        <label>product price:</label>
        <input
          id="productPrice"
          name="productPrice"
          type="number"
          ref={register({
            required: true,
          })}
        />
        {errors.productPrice && (
          <ErrorMessage>This field is required </ErrorMessage>
        )}
        <StyledButton id="addIngredient" onClick={(e) => addIngredient(e)}>
          +
        </StyledButton>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <label>ingredient:</label>
            <input
              id={"ingredient" + index}
              name={"ingredient" + index}
              ref={register({
                required: true,
              })}
            />
            <span>{index}</span>
            <StyledButton
              id={index}
              placeholder={index}
              onClick={(e) => handleInputRemove(e, index)}
            >
              -
            </StyledButton>
          </div>
        ))}
        <Button type="submit">add product</Button>
      </form>
    </AddProductGridTemplate>
  );
};

export default AddNewProdcutsForm;
