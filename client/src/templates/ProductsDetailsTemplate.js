import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProductDetailsTemplate = ({ burger, match }) => {
  if (burger) {
    return (
      <div>
        <p>id:{match.params.id}</p>
        <p>tittle:{burger.productName}</p>
        <p>price:{burger.productPrice}</p>
        <p>sauce:</p>
        {burger.ingredients.map((ingredient, index) => (
          <span key={index}>{ingredient + ", "}</span>
        ))}
        <p>
          <Link to="/">go back</Link>
        </p>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
};

const mapStateToProps = ({ firestoreReducer }, { match }) => {
  const id = match.params.id;
  const burgers = firestoreReducer.data.burgers;
  const burger = burgers ? burgers[id] : null;
  return {
    burger,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "burgers",
    },
  ])
)(ProductDetailsTemplate);
