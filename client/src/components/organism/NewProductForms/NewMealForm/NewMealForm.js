/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { connect, useDispatch, useSelector } from "react-redux";
import { getProduct, cleanForm } from "../../../../actions/edit";
import Input from "../../../atoms/Input/Input";
import ErrorMessage from "../../../atoms/ErrorMessage/ErrorMessage";
import AddProductGridTemplate from "../../../../templates/NewProductGridTemplate";
import { addMeal, updateMeal } from "../../../../actions/meals";
import LongButton from "../../../atoms/BUTTONS/LongButton/LongButton";
import AddIgredientsButton from "../../../atoms/BUTTONS/AddIgredientsButton/AddIgredientsButton";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
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
const StyledSelect = styled.select`
  padding: 10px 20px 10px 20px;
  color: orange;
  margin-bottom: 10px;
`;

const NewMealForm = ({ action, edit, id }) => {
  const mealId = id;
  const [ingredients, setIngredients] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(getProduct(id, collectionsNames.meals));
    return () => dispatch(cleanForm());
  }, [dispatch]);

  const onSubmit = (meal) => {
    const mealToUpdate = {
      id: mealId,
      body: meal,
    };
    if (action === "update") {
      dispatch(updateMeal(mealToUpdate));
    } else {
      dispatch(addMeal(meal));
    }
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
        <StyledLabel htmlFor="name">Meal Name:</StyledLabel>
        <Input
          defaultValue={product && product.name}
          id="name"
          name="name"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.productName && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}

        <StyledLabel htmlFor="price">Meal price :</StyledLabel>
        <Input
          defaultValue={product && product.price}
          id="price"
          name="price"
          type="number"
          ref={register({
            required: true,
          })}
        />
        {errors.productPrice && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}

        <StyledLabel htmlFor="mealType">Meal Type:</StyledLabel>
        <StyledSelect
          defaultValue={product && product.mealType}
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

        <StyledLabel htmlFor="meatType">Meat Type:</StyledLabel>
        <StyledSelect
          defaultValue={product && product.meatType}
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

        <StyledLabel htmlFor="sauce">choose a sauce:</StyledLabel>
        <StyledSelect
          defaultValue={product && product.sauce}
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
        <AddIgredientsButton
          id="addIngredient"
          onClick={(e) => addIngredient(e)}
        >
          <FaPlus />
        </AddIgredientsButton>

        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <Input
              ref={register({
                required: true,
              })}
              name={`ingredients[${index}]`}
            />
            <AddIgredientsButton
              remove
              id={index}
              placeholder={index}
              onClick={(e) => handleInputRemove(e, index)}
            >
              <FaMinus />
            </AddIgredientsButton>
          </div>
        ))}
        {edit &&
          product.ingredients &&
          product.ingredients.map((ingredient, index) => (
            <div key={index}>
              <Input
                defaultValue={ingredient}
                ref={register({
                  required: true,
                })}
                name={`ingredients[${index}]`}
              />
              <AddIgredientsButton
                remove
                id={index}
                placeholder={index}
                onClick={(e) => handleInputRemove(e, index)}
              >
                <FaMinus />
              </AddIgredientsButton>
            </div>
          ))}

        <input type="file" id="img" name="img" accept="image/*" />
        <LongButton>{action}</LongButton>
      </FormWrapper>
      {product.message && <ErrorMessage>{product.message}</ErrorMessage>}
    </AddProductGridTemplate>
  );
};

export default connect()(NewMealForm);
