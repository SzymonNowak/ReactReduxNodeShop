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
`;
const StyledLongButton = styled(LongButton)`
  margin-top: 30px;
`;

const NewProductsForm = ({ match }) => {
  const [ingredients, setIngredients] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const formTypes = ["burgers", "tortillas", "addons", "beverages"];
  const currentFormType = formTypes.filter((type) => match.path.includes(type));

  const onSubmit = (itemContent) => {
    dispatch(addItemAction(itemContent, currentFormType));
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
        <StyledLabel htmlFor="productName">{`${currentFormType} name :`}</StyledLabel>
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
        <StyledLabel>product price :</StyledLabel>
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

        {currentFormType == "tortillas" && (
          <>
            <label htmlFor="sauce">choose a sauce:</label>
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
            </StyledSelect>
            <SmallButton id="addIngredient" onClick={(e) => addIngredient(e)}>
              +
            </SmallButton>
            <h1>ingredient</h1>
          </>
        )}
        {currentFormType == "burgers" && (
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
            </StyledSelect>
            <h1>ingredients :</h1>
            <SmallButton id="addIngredient" onClick={(e) => addIngredient(e)}>
              +
            </SmallButton>
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
        <StyledLongButton type="submit">add product</StyledLongButton>
      </FormWrapper>
    </AddProductGridTemplate>
  );
};

export default connect()(NewProductsForm);
