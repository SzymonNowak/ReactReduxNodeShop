import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Card from "../components/molecules/Card/Card";

const Main = ({ products }) => {
  return (
    <div>
      {products.length ? (
        products.map(
          ({
            id,
            productName,
            productPrice,
            ingredients,
            sauce,
            mealOfTheWeek,
          }) => (
            <Card
              id={id}
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
        <p>there is nothing to show</p>
      )}
    </div>
  );
};

const mapeStateToProps = ({ ProductReducer, firestoreReducer }) => {
  return {
    products: firestoreReducer.ordered.burgers || ProductReducer.products,
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
