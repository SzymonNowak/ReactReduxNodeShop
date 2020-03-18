import React, { useState } from "react";
import styled from "styled-components";
import { connect, } from 'react-redux';
import PropTypes from "prop-types";
import { removeItem as removeItemAction } from '../../../actions/removeItemAction';
import { addItemToCart as addItemToCartAction } from "../../../actions/addItemToCartAction";
const Wrapper = styled.div`
    height:200px;
    width:200px;
    border:1px solid black;

`;

const Card = ({
  id,
  tittle,
  count,
  price,
  description,
  removeItem,
  addItemToCart }) => { 
  const item = {
    id,
    tittle,
    count,
    price,
  };
  return (
    <Wrapper>
      <p>{tittle}</p>
      <p>{count}</p>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={() => removeItem(id)}>Usun</button>
      <button>Edit</button>
      <button onClick={() => addItemToCart(item)}>
        Add to cart
      </button>
    </Wrapper>
  );
  

  

}






Card.protoTypes = {
  id: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};
   

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
  addItemToCart: item => dispatch(addItemToCartAction(item))
});


export default connect(null,mapDispatchToProps)(Card);

