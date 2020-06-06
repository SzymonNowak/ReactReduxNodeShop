/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";

class AddNewProdcutsForm extends Component {
  state = {
    ingredients: [],
  }


  render() {
    const { ingredients } = this.state;
    const addIngredient = (e) => {
      e.preventDefault();
      this.setState({ ingredients: [...ingredients, ""] });
    };
    const handleInputChange = (e, index) => {
      ingredients[index] = e.target.value;
      this.setState({ ingredients });
    };
    const handleInputRemove = (e, index) => {
      e.preventDefault();
      ingredients.splice(index, 1);
      this.setState({ ingredients });
    };
    const handleSubmit = (e) => {
      console.log(this.state);
    };
    return (
      <div>
        <form>
          <label htmlFor="productName">product name:</label>
          <input id="productName" name="productName" type="text" />
          <label>product price:</label>
          <input />
          <button id="addIngredient" onClick={(e) => addIngredient(e)}>Add ingredient</button>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input value={ingredient} id="ingredient" onChange={(e) => handleInputChange(e, index)} />
              <button onClick={(e) => handleInputRemove(e, index)}>remove</button>

            </div>
          ))}
        </form>
        <button onClick={(e) => handleSubmit(e)}>add product</button>
      </div>
    );
  }
}

export default AddNewProdcutsForm;
