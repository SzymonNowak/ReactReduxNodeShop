import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/edit";

const ProductDetailsTemplate = ({ match }) => {
  const dispatch = useDispatch();
  const { collection, id } = match.params;
  const product = useSelector((state) => state.ProductReducer.products);

  useEffect(() => {
    dispatch(getProduct(id, collection));
  }, [dispatch]);

  return (
    <>
      <p>collection:{collection}</p>
      <p>id:{id}</p>
    </>
  );
};

export default ProductDetailsTemplate;
