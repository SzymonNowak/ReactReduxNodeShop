import React from "react";
import { Link } from "react-router-dom";

const ProductDetailsTemplate = ({ match }) => (
  <>
    <p>
      id:
      {match.params.id}
    </p>
    <p>tittle:</p>
    <p>price:</p>
    <p>sauce:</p>
    <p>{`product of the week:false`}</p>

    <Link to="/">go back</Link>
  </>
);

export default ProductDetailsTemplate;
