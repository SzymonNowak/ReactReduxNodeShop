/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
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

const Main = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.MealReducer.meals);
  const addons = useSelector((state) => state.AddonReducer.addons);
  const beverages = useSelector((state) => state.BeveragesReducer.beverages);
  const sauces = useSelector((state) => state.SauceReducer.sauces);

  useEffect(() => {
    dispatch(getAllMeals());
    dispatch(getAllAddons());
    dispatch(getAllBeverages());
    dispatch(getAllSauces());
  }, [dispatch]);

  return (
    <>
      <HeaderParagraph>Burgers : </HeaderParagraph>
      <MainGridTemaplte>
        {meals && showItems(meals, drawBurger)}
      </MainGridTemaplte>
      <HeaderParagraph>Addons : </HeaderParagraph>
      <MainGridTemaplte>
        {addons && showItems(addons, drawFrenchFries)}
      </MainGridTemaplte>
      <HeaderParagraph>Beverages : </HeaderParagraph>
      <MainGridTemaplte>
        {beverages && showItems(beverages, drawBeverages)}
      </MainGridTemaplte>
      <HeaderParagraph>Sauces : </HeaderParagraph>
      <MainGridTemaplte>
        {sauces && showItems(sauces, drawTortilla)}
      </MainGridTemaplte>
    </>
  );
};

const showItems = (products, photo) =>
  products.map(
    ({ id, name, price, mealType, ingredients, meatType, sauce }) => (
      <Card
        id={id}
        name={name}
        price={price}
        key={id}
        meatType={meatType}
        ingredients={ingredients}
        mealType={mealType}
        sauce={sauce}
        photo={photo}
      />
    )
  );

export default Main;
