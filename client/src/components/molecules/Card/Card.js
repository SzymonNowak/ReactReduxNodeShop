import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItemToCart as addItemToCartAction } from "../../../actions/addItemToCart";
import PriceText from "../../atoms/PriceText/PriceText";
import LongButton from "../../atoms/LongButton/LongButton";

const Wrapper = styled.div`
  height: 100%;
  width: 305px;
  text-align: center;
  margin: 20px 10px 20px 10px;
`;
const StyledLink = styled(Link)`
  color: black;
`;
const StyledImg = styled.img`
  width: 100%;
`;
const Card = ({ id, name, price, components, addItemToCart, photo }) => {
  const item = {
    id,
    name,
    price,
    components,
  };
  return (
    <Wrapper>
      <StyledLink to={`burger/${id}`}>
        <StyledImg src={photo} />
      </StyledLink>
      <h1>{name}</h1>
      <PriceText>{`${price} zl`}</PriceText>
      {components &&
        components.map((component, index) => (
          <span key={index}>{`${component}, `}</span>
        ))}
      <LongButton onClick={() => addItemToCart(item)}>Add to cart</LongButton>
    </Wrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  tittle: PropTypes.string,
  price: PropTypes.number,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  sauce: PropTypes.string,
  addItemToCart: PropTypes.func,
};

Card.defaultProps = {
  tittle: "asd",
  price: 18,
  ingredients: [],
  // sauce: "M M",
  addItemToCart: () => ({}),
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(() => ({}), mapDispatchToProps)(Card);
