import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsTemplate = ({ match }) => {
  // const meal = useSelector((state) => state.MealReducer.meals);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllMeals());
  // }, [dispatch]);
  // if (burger) {
  //   return (
  //     <div>
  //       <p>id:{match.params.id}</p>
  //       <p>tittle:{burger.productName}</p>
  //       <p>price:{burger.productPrice}</p>
  //       <p>sauce:</p>
  //       {burger.ingredients.map((ingredient, index) => (
  //         <span key={index}>{ingredient + ", "}</span>
  //       ))}
  //       <p>
  //         <Link to="/">go back</Link>
  //       </p>
  //     </div>
  //   );
  // } else {
  //   return <p>loading</p>;
  // }
};

export default ProductDetailsTemplate;
