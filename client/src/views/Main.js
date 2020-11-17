/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  firestoreConnect,
  withFirestore,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { compose } from "redux";
import { collectionNames } from "../constants/collectionNames";
import Card from "../components/molecules/Card/Card";
import drawBurger from "../assets/drawBurger.jpg";
import drawFrenchFries from "../assets/drawFrenchFries.png";
import drawTortilla from "../assets/drawTortilla.jpg";
import drawBeverages from "../assets/drawBeverages.jpg";
import MainGridTemaplte from "../templates/MainGridTemaplate";
import HeaderParagraph from "../components/atoms/HeaderParagraph/HeaderParagraph";

const Main = ({ burgers, tortillas, addons, beverages }) => {
  return (
    <>
      <HeaderParagraph>Burgers : </HeaderParagraph>
      <MainGridTemaplte>
        {!isLoaded(burgers)
          ? "Loading"
          : isEmpty(burgers)
          ? "burgers list is empty"
          : showItems(burgers, drawBurger)}
      </MainGridTemaplte>
      <HeaderParagraph>Tortillas : </HeaderParagraph>

      <MainGridTemaplte>
        {!isLoaded(tortillas)
          ? "Loading"
          : isEmpty(tortillas)
          ? "tortillas list is empty"
          : showItems(tortillas, drawTortilla)}
      </MainGridTemaplte>
      <HeaderParagraph>Addons : </HeaderParagraph>

      <MainGridTemaplte>
        {!isLoaded(addons)
          ? "Loading"
          : isEmpty(addons)
          ? "addons list is empty"
          : showItems(addons, drawFrenchFries)}
      </MainGridTemaplte>
      <HeaderParagraph>Beverages : </HeaderParagraph>

      <MainGridTemaplte>
        {!isLoaded(beverages)
          ? "Loading"
          : isEmpty(beverages)
          ? "beverages list is empty"
          : showItems(beverages, drawBeverages)}
      </MainGridTemaplte>
    </>
  );
};

const mapeStateToProps = ({ ProductReducer, firestoreReducer }) => ({
  burgers: firestoreReducer.ordered.burgers || ProductReducer.products,
  tortillas: firestoreReducer.ordered.tortillas || ProductReducer.products,
  addons: firestoreReducer.ordered.addons || ProductReducer.products,
  beverages: firestoreReducer.ordered.beverages || ProductReducer.products,
});

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

export default compose(
  connect(mapeStateToProps),
  firestoreConnect([
    {
      collection: collectionNames.burgers,
    },
    {
      collection: collectionNames.tortillas,
    },
    {
      collection: collectionNames.addons,
    },
    {
      collection: collectionNames.beverages,
    },
  ])
)(Main);
