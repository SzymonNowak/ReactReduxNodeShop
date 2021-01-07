import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/edit";

const ProductDetailsTemplate = ({ match }) => {
  const dispatch = useDispatch();
  const { collection, id } = match.params;
  const product = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(getProduct(id, collection));
  }, [dispatch]);

  return (
    <>
      {console.log(product)}
      <p>collection:{collection}</p>
      <p>id:{id}</p>
      <p>{product.sauce && product.sauce}</p>
      <p>{product.mealType && product.mealType}</p>
      <p>{product.meatType && product.meatType}</p>
      <p>{product.price}</p>
      <p>{product.name}</p>
    </>
  );
};

export default ProductDetailsTemplate;
