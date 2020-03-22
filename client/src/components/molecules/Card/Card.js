import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem as removeItemAction } from '../../../actions/removeItemAction';
import { addItemToCart as addItemToCartAction } from '../../../actions/addItemToCartAction';

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
  addItemToCart,
}) => {
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
};

Card.propTypes = {
  id: PropTypes.string,
  tittle: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
  removeItem: PropTypes.func,
  addItemToCart: PropTypes.func,
};

Card.defaultProps = {
  id: 'asd',
  tittle: 'asd',
  count: 10,
  price: 10,
  description: 'asd',
  removeItem: () => {},
  addItemToCart: () => { },
};


const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});


export default connect(null, mapDispatchToProps)(Card);
