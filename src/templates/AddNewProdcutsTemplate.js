/* eslint-disable jsx-a11y/label-has-associated-control */

// TODO move this to organism from templates

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import Input from "../components/atoms/Input/Input";
import SmallButton from "../components/atoms/SmallButton/SmallButton";
import LongButton from "../components/atoms/LongButton/LongButton";
import ErrorMessage from "../components/atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "./NewProductGridTemplate";
import { addItem as addItemAction } from "../actions/addItemAction";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddNewProdcutsTemplate = ({ match }) => {
  const [ingredients, setIngredients] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const { path } = match;
  const burger = "/newBurger";
  const tortilla = "/newTortilla";
  useEffect(() => {});

  const onSubmit = (itemContent) => {
    dispatch(addItemAction(itemContent));
  };

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredients(ingredients.concat(""));
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
        <h1 htmlFor="productName">{path + " name"}</h1>
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

        {path === burger && (
          <>
            <SmallButton id="addIngredient" onClick={(e) => addIngredient(e)}>
              +
            </SmallButton>
            <h1>ingredient</h1>
          </>
        )}

        {path === tortilla && (
          <>
            <SmallButton id="addIngredient" onClick={(e) => addIngredient(e)}>
              +
            </SmallButton>
            <h1>ingredient</h1>
          </>
        )}

        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <Input
              ref={register({
                required: true,
              })}
              name={`ingredients[${index}]`}
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
        <label htmlFor="sauce">Choose a sauce:</label>
        <select
          name="sauce"
          id="sauce"
          ref={register({
            required: true,
          })}
        >
          <option value="MM">MM</option>
          <option value="Garlic">Garlic</option>
          <option value="DIP">DIP</option>
          <option value="BBQ">BBQ</option>
        </select>
        <LongButton type="submit">add product</LongButton>
      </FormWrapper>
    </AddProductGridTemplate>
  );
};

export default connect()(AddNewProdcutsTemplate);
