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
    ({ id, name, price, mealType, ingredients, meatType, sauce }) => (
      <>
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
      </>
    )
  );
};

const filtrYourConcent = (meals, mealType, meatType) => {
  if (mealType === "burger") {
    const burgers = meals.filter((meal) => meal.mealType == "burger");
    const beef = burgers.filter((meal) => meal.meatType == "beef");
    const chicken = burgers.filter((meal) => meal.meatType == "chicken");
    const prawns = burgers.filter((meal) => meal.meatType == "prawns");
    const vege = burgers.filter((meal) => meal.meatType == "vege");
    if (meatType === "beef") {
      return beef;
    } else if (meatType === "chicken") {
      return chicken;
    } else if (meatType === "prawns") {
      return prawns;
    } else {
      return vege;
    }
  } else if (mealType === "tortilla") {
    const tortilla = meals.filter((meal) => meal.mealType === "tortilla");
    const beef = tortilla.filter((meal) => meal.meatType === "beef");
    const chicken = tortilla.filter((meal) => meal.meatType === "chicken");
    const prawns = tortilla.filter((meal) => meal.meatType === "prawns");
    const vege = tortilla.filter((meal) => meal.meatType === "vege");
    if (meatType === "beef") {
      return beef;
    } else if (meatType === "chicken") {
      return chicken;
    } else if (meatType === "prawns") {
      return prawns;
    } else {
      return vege;
    }
  } else if (mealType === "dinnerwareSet") {
    const dinnerwareSet = meals.filter(
      (meal) => meal.mealType === "dinnerwareSet"
    );
    const beef = dinnerwareSet.filter((meal) => meal.meatType === "beef");
    const chicken = dinnerwareSet.filter((meal) => meal.meatType === "chicken");
    if (meatType === "beef") {
      return beef;
    } else if (meatType === "chicken") {
      return chicken;
    } else if (meatType === "vege" || meatType === "prawns") {
      return [];
    }
  }
};
export default MealSection;
