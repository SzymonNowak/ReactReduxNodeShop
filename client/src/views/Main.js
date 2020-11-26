/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Card from "../components/molecules/Card/Card";
import drawBurger from "../assets/drawBurger.jpg";
import drawFrenchFries from "../assets/drawFrenchFries.png";
import drawTortilla from "../assets/drawTortilla.jpg";
import drawBeverages from "../assets/drawBeverages.jpg";
import MainGridTemaplte from "../templates/MainGridTemaplate";
import HeaderParagraph from "../components/atoms/HeaderParagraph/HeaderParagraph";
import { getAllMeals } from "../actions/meals";
import { getAllAddons } from "../actions/addons";
import { getAllBeverages } from "../actions/beverages";
import { getAllSauces } from "../actions/sauces";

const Main = ({ burgers, tortillas, addons, beverages }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMeals());
    dispatch(getAllAddons());
    dispatch(getAllBeverages());
    dispatch(getAllSauces());
  }, [dispatch]);

  return (
    <>
      <HeaderParagraph>Burgers : </HeaderParagraph>
      <MainGridTemaplte></MainGridTemaplte>
    </>
  );
};

const showItems = (products, photo) =>
  products.map(
    ({ id, productName, productPrice, ingredients, sauce, mealOfTheWeek }) => (
      <Card
        id={id}
        tittle={productName}
        price={productPrice}
        key={productName}
        ingredients={ingredients}
        sauce={sauce}
        mealOfTheWeek={mealOfTheWeek}
        photo={photo}
      />
    )
  );

export default Main;
