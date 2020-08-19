import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../components/molecules/Card/Card";

const Main = ({ products }) => {
  return (
    <div>
      {products.map(
        ({ productName, productPrice, ingredients, sauce, mealOfTheWeek }) => (
          <Card
            tittle={productName}
            price={productPrice}
            key={productName}
            ingredients={ingredients}
            sauce={sauce}
            mealOfTheWeek={mealOfTheWeek}
          />
        )
      )}
    </div>
  );
};

const mapeStateToProps = ({ ProductReducer }) => ({
  products: ProductReducer.products,
});

export default connect(mapeStateToProps)(Main);
