import React, { useState } from "react";
import styled from "styled-components";
import { connect, } from 'react-redux';
import { removeItem } from '../../../actions/index';

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
  productPhoto,
  removeItem
}) => (
  <Wrapper>
    <p>{tittle}</p>
    <p>{count}</p>
    <p>{price}</p>
    <p>{description}</p>
    <p>{productPhoto}</p>
    <button onClick={() => removeItem(id)}>Usun</button>
  </Wrapper>
);
   

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id))
});


export default connect(null,mapDispatchToProps)(Card);