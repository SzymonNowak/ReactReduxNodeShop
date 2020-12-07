/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import Input from "../../atoms/Input/Input";
import SmallButton from "../../atoms/SmallButton/SmallButton";
import LongButton from "../../atoms/LongButton/LongButton";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../templates/NewProductGridTemplate";
import { addItem as addItemAction } from "../../../actions/addItemAction";

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
const StyledSelect = styled.select`
  padding: 10px 20px 10px 20px;
  color: orange;
  margin-bottom: 10px;
`;
const StyledLongButton = styled(LongButton)`
  margin-top: 30px;
`;

const NewMealForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (itemContent) => {
    // dispatch(addItemAction(itemContent));
    console.log(itemContent);
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
        <StyledLabel htmlFor="mealName">Meal Name:</StyledLabel>
        <Input
          id="mealName"
          name="mealName"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.productName && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <StyledLabel htmlFor="mealPrice">Meal price :</StyledLabel>
        <Input
          id="mealPrice"
          name="mealPrice"
          type="number"
          ref={register({
            required: true,
          })}
        />
        {errors.productPrice && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        <>
          <StyledLabel htmlFor="mealType">Meal Type:</StyledLabel>
          <StyledSelect
            name="mealType"
            id="mealType"
            ref={register({
              required: true,
            })}
          >
            <option value="burger">burger</option>
            <option value="tortilla">tortilla</option>
            <option value="dinnerwareSet">dinnerware set</option>
          </StyledSelect>
        </>
        <>
          <StyledLabel htmlFor="meatType">Meat Type:</StyledLabel>
          <StyledSelect
            name="meatType"
            id="meatType"
            ref={register({
              required: true,
            })}
          >
            <option value="beef">beef</option>
            <option value="chicken">chicken</option>
            <option value="prawns">prawns</option>
            <option value="vege">vege</option>
          </StyledSelect>
        </>

        <>
          <StyledLabel htmlFor="sauce">choose a sauce:</StyledLabel>
          <StyledSelect
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
            <option value="Hell">Hell</option>
            <option value="dill">dill</option>
            <option value="curry">curry</option>
            <option value="sweetChilli">sweet chilli</option>
          </StyledSelect>
          <h1>ingredients :</h1>
          <SmallButton id="addIngredient" onClick={(e) => addIngredient(e)}>
            +
          </SmallButton>
        </>

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
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          ref={register({
            required: true,
          })}
        ></input>
        <StyledLongButton type="submit">add product</StyledLongButton>
      </FormWrapper>
    </AddProductGridTemplate>
  );
};

export default connect()(NewMealForm);
