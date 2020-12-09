import React from "react";
import MainGridTemaplte from "../../../templates/MainGridTemaplate";
import Card from "../Card/Card";

const MealSection = ({ meals, picture, mealType, meatType }) => {
  return (
    <>
      {mealType ? (
        <>
          <h1>beef : </h1>
          <MainGridTemaplte>
            {meals &&
              showItems(filtrYourConcent(meals, mealType, "beef"), picture)}
          </MainGridTemaplte>
          <h1>chicken : </h1>
          <MainGridTemaplte>
            {meals &&
              showItems(filtrYourConcent(meals, mealType, "chicken"), picture)}
          </MainGridTemaplte>
          {mealType !== "dinnerwareSet" ? <h1>prawns : </h1> : null}
          <MainGridTemaplte>
            {meals &&
              showItems(filtrYourConcent(meals, mealType, "prawns"), picture)}
          </MainGridTemaplte>

          {mealType !== "dinnerwareSet" ? <h1>vege : </h1> : null}
          <MainGridTemaplte>
            {meals &&
              showItems(filtrYourConcent(meals, mealType, "vege"), picture)}
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
    ({ _id, name, price, mealType, ingredients, meatType, sauce }) => (
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
        />
      </>
    )
  );
};

const filtrYourConcent = (meals, mealType, meatType) =>
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
