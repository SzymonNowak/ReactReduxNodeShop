import React from "react";
import { connect } from "react-redux";
import Card from "../components/molecules/Card/Card";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
const Main = ({ products }) => {
  return (
    <div>
      {products.length ? (
        products.map(
          ({
            productName,
            productPrice,
            ingredients,
            sauce,
            mealOfTheWeek,
          }) => (
            <Card
              tittle={productName}
              price={productPrice}
              key={productName}
              ingredients={ingredients}
              sauce={sauce}
              mealOfTheWeek={mealOfTheWeek}
            />
          )
        )
      ) : (
        <p>there is nothing</p>
      )}
    </div>
  );
};

const mapeStateToProps = ({ ProductReducer, firestoreReducer }) => {
  console.log(firestoreReducer);
  return {
    products: ProductReducer.products,
  };
};

export default compose(
  connect(mapeStateToProps),
  firestoreConnect([
    {
      collection: "burgers",
    },
  ])
)(Main);
