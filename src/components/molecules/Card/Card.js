import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeItem as removeItemAction } from "../../../actions/removeItemAction";
import { addItemToCart as addItemToCartAction } from "../../../actions/addItemToCartAction";
import Burger from "../../../assets/burger.jpg";

const Wrapper = styled.div`
  height: 100%;
  width: 305px;
  float: left;
  text-align: center;
  margin-left: 200px;
  margin-top: 15px;
  box-shadow: 0px 0px 10px #f39c12;
`;
const StyledImg = styled.img`
  /* margin-top:5px; */
`;
const Card = ({
  tittle,
  price,
  ingredients,
  sauce,
  mealOfTheWeek,
  removeItem,
  addItemToCart,
}) => {
  const item = {
    tittle,
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
        price:
        {price}
      </p>
      <p>ingredients:</p>
      {ingredients.map((item) => (
        <p>{item}</p>
      ))}
      <p>sauce:{sauce}</p>
      <button onClick={() => removeItem(tittle)}>Usun</button>
      <button>Edit</button>
      <button onClick={() => addItemToCart(item)}>Add to cart</button>
    </Wrapper>
  );
};

// Card.propTypes = {
//   tittle: PropTypes.string,
//   price: PropTypes.number,
//   removeItem: PropTypes.func,
//   addItemToCart: PropTypes.func,
// };

// Card.defaultProps = {
//   tittle: "asd",
//   price: 10,
//   removeItem: () => ({}),
//   addItemToCart: () => ({}),
// };

const mapDispatchToProps = (dispatch) => ({
  removeItem: (tittle) => dispatch(removeItemAction(tittle)),
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(() => ({}), mapDispatchToProps)(Card);
