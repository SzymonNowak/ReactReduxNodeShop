/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MealSection from "../components/molecules/mealSection/MealSection";
import drawBurger from "../assets/drawBurger.jpg";
import drawFrenchFries from "../assets/drawFrenchFries.png";
import drawTortilla from "../assets/drawTortilla.jpg";
import drawBeverages from "../assets/drawBeverages.jpg";
import drawSauce from "../assets/drawSauce.jpg";
import { getAllMeals } from "../actions/meals";
import { getAllAddons } from "../actions/addons";
import { getAllBeverages } from "../actions/beverages";
import { getAllSauces } from "../actions/sauces";
import HeaderParagraph from "../components/atoms/HeaderParagraph/HeaderParagraph";

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
      <MealSection meals={meals} mealType={"burger"} picture={drawBurger} />

      <HeaderParagraph>Tortillas : </HeaderParagraph>
      <MealSection meals={meals} mealType={"tortilla"} picture={drawTortilla} />

      <HeaderParagraph>Dinnerware Set : </HeaderParagraph>
      <MealSection
        meals={meals}
        mealType={"dinnerwareSet"}
        picture={drawFrenchFries}
      />

      <HeaderParagraph>Addons : </HeaderParagraph>
      <MealSection meals={addons} picture={drawFrenchFries} />

      <HeaderParagraph>Sauces : </HeaderParagraph>
      <MealSection meals={sauces} picture={drawSauce} />

      <HeaderParagraph>Beverages : </HeaderParagraph>
      <MealSection meals={beverages} picture={drawBeverages} />
    </>
  );
};

export default Main;
