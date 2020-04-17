import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem as removeItemAction } from '../../../actions/removeItemAction';
import { addItemToCart as addItemToCartAction } from '../../../actions/addItemToCartAction';
import Burger from '../../../assets/burger.jpg';

const Wrapper = styled.div`
    height:400px;
    width:305px;
    float:left;
    text-align:center;
    margin-left:200px;
    margin-top:15px;
    box-shadow: 0px 0px 10px #f39c12 ;
`;
const StyledImg = styled.img`
  /* margin-top:5px; */
`;
const Card = ({
  tittle,
  count,
  price,
  description,
  removeItem,
  addItemToCart,
}) => {
  const item = {
    tittle,
    count,
    price,
  };
  return (
    <Wrapper>
      <StyledImg src={Burger} />
      <p>
        tittle:
        {tittle}
      </p>
      <p>
        count:
        {' '}
        {count}
      </p>
      <p>
        price:
        {price}
      </p>
      <p>
        description:
        {description}
      </p>
      <button onClick={() => removeItem(tittle)}>Usun</button>
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
  removeItem: () => ({}),
  addItemToCart: () => ({}),
};


const mapDispatchToProps = (dispatch) => ({
  removeItem: (tittle) => dispatch(removeItemAction(tittle)),
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});


export default connect(() => ({}), mapDispatchToProps)(Card);
