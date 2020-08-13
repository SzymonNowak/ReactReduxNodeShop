import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import IconButton from "../components/atoms/IconButton/IconButton";
import Card from "../components/molecules/Card/Card";

const Main = ({ products }) => {
  return (
    <div>
      {products.map(({ tittle, price, ingredients, sauce, mealOfTheWeek }) => (
        <Card
          tittle={tittle}
          price={price}
          key={tittle}
          ingredients={ingredients}
          sauce={sauce}
          mealOfTheWeek={mealOfTheWeek}
        />
      ))}
    </div>
  );
};

const mapeStateToProps = ({ ProductReducer }) => ({
  products: ProductReducer.products,
});

export default connect(mapeStateToProps)(Main);
