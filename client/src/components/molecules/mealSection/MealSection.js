import React from "react";
import styled from "styled-components";
import MainGridTemaplte from "../../../templates/MainGridTemaplate";
import Card from "../Card/Card";
import SmallerHeader from "../../atoms/SmallerHeader/SmallerHeader";

const StyledSmallerHeader = styled(SmallerHeader)`
  margin-left: ${({ theme }) => theme.margin.l};
  margin-top: ${({ theme }) => theme.margin.l};
  margin-bottom: ${({ theme }) => theme.margin.l};
`;

const MealSection = ({ meals, picture, mealType, meatType }) => {
  return (
    <>
      {mealType ? (
        <>
          <StyledSmallerHeader>beef : </StyledSmallerHeader>
          <MainGridTemaplte>
            {meals && showItems(filtrContent(meals, mealType, "beef"), picture)}
          </MainGridTemaplte>
          <StyledSmallerHeader>chicken : </StyledSmallerHeader>
          <MainGridTemaplte>
            {meals &&
              showItems(filtrContent(meals, mealType, "chicken"), picture)}
          </MainGridTemaplte>
          {mealType !== "dinnerwareSet" ? (
            <StyledSmallerHeader>prawns : </StyledSmallerHeader>
          ) : null}
          <MainGridTemaplte>
            {meals &&
              showItems(filtrContent(meals, mealType, "prawns"), picture)}
          </MainGridTemaplte>

          {mealType !== "dinnerwareSet" ? (
            <StyledSmallerHeader>vege : </StyledSmallerHeader>
          ) : null}
          <MainGridTemaplte>
            {meals && showItems(filtrContent(meals, mealType, "vege"), picture)}
          </MainGridTemaplte>
        </>
      ) : null}
      {mealType ? null : (
        <>
          <MainGridTemaplte>
            {meals && showItems(meals, picture)}
          </MainGridTemaplte>
        </>
      )}
    </>
  );
};

const showItems = (products, photo) => {
  return products.map(
    ({ _id, name, price, mealType, ingredients, meatType, sauce, type }) => (
      <>
        <Card
          id={_id}
          name={name}
          price={price}
          key={_id}
          meatType={meatType}
          ingredients={ingredients}
          mealType={mealType}
          sauce={sauce}
          photo={photo}
          type={type}
        />
      </>
    )
  );
};

const filtrContent = (meals, mealType, meatType) =>
  meals
    .filter((meal) => meal.mealType === mealType && meal.meatType === meatType)
    .filter(
      (meal) =>
        !(
          meal.mealType === "dinnerwareSet" &&
          meatType === "vege" &&
          meal.mealType === "dinnerwareSet" &&
          meatType === "prawns"
        )
    );

export default MealSection;
