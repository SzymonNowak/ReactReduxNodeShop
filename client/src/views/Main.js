/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import { collectionNames } from "../constants/collectionNames";
import Card from "../components/molecules/Card/Card";
import drawBurger from "../assets/drawBurger.jpg";
import drawFrenchFries from "../assets/drawFrenchFries.png";
import drawTortilla from "../assets/drawTortilla.jpg";
import drawBeverages from "../assets/drawBeverages.jpg";
import MainGridTemaplte from "../templates/MainGridTemaplate";
import HeaderParagraph from "../components/atoms/HeaderParagraph/HeaderParagraph";
import axios from "axios";

const Main = ({ burgers, tortillas, addons, beverages }) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/meals/getAllMeals");
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <HeaderParagraph>Burgers : </HeaderParagraph>
      <MainGridTemaplte></MainGridTemaplte>
    </>
  );
};

// const mapeStateToProps = ({ ProductReducer, firestoreReducer }) => ({
//   burgers: firestoreReducer.ordered.burgers || ProductReducer.products,
//   tortillas: firestoreReducer.ordered.tortillas || ProductReducer.products,
//   addons: firestoreReducer.ordered.addons || ProductReducer.products,
//   beverages: firestoreReducer.ordered.beverages || ProductReducer.products,
// });
// const mapeStateToProps = ({ ProductReducer }) => ({
//   burgers: ProductReducer.products,
//   tortillas: ProductReducer.products,
//   addons: ProductReducer.products,
//   beverages: ProductReducer.products,
// });

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
