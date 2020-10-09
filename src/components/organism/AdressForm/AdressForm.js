/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import LongButton from "../../atoms/LongButton/LongButton";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import FormWrapper from "../../atoms/FormWrapper/FormWrapper";

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1000px;
`;
const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const MainWrapper = styled.div`
  margin-top: 100px;
`;

const StyledLabel = styled.label`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-right: 20px;
`;
const StyledInput = styled(Input)`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 20px 0px 20px 0px;
`;

const PayMethodCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border: 1px solid black;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #f2f4f7;
  ${({ isChoosenCard }) =>
    isChoosenCard &&
    css`
      background-color: white;
      border-color: orange;
    `}
  ${({ isChoosenCash }) =>
    isChoosenCash &&
    css`
      background-color: white;
      border-color: orange;
    `}
`;
const StyledIconHolder = styled.p`
  font-size: 100px;
  color: black;
  ${({ isChoosenCard }) =>
    isChoosenCard &&
    css`
      color: orange;
    `}
  ${({ isChoosenCash }) =>
    isChoosenCash &&
    css`
      color: orange;
    `}
`;

const AdressForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isChoosenCard, setChooseCard] = useState(false);
  const [isChoosenCash, setChooseCash] = useState(false);

  const onSubmit = (itemContent) => {
    console.log(itemContent);
  };

  const setPayMethod = (e) => {
    const payMethod = e.target.id;
    if (payMethod == "card") {
      setChooseCard(true);
      setChooseCash(false);
    }
    if (payMethod == "cash") {
      setChooseCard(false);
      setChooseCash(true);
    }
    console.log(payMethod);
  };

  return (
    <MainWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <RowWrapper>
            <StyledLabel>Name</StyledLabel>
            <StyledInput
              id="Name"
              name="Name"
              type="text"
              ref={register({
                required: true,
              })}
            />
          </RowWrapper>
          <RowWrapper>
            <StyledLabel>Surname</StyledLabel>
            <StyledInput
              id="SurName"
              name="SurName"
              type="text"
              ref={register({
                required: true,
              })}
            />
          </RowWrapper>
        </Row>
        <Row>
          <RowWrapper>
            <StyledLabel>Phone Number</StyledLabel>
            <StyledInput
              id="PhoneNumber"
              name="PhoneNumber"
              type="text"
              ref={register({
                required: true,
              })}
            />
          </RowWrapper>
          <RowWrapper>
            <StyledLabel>Street</StyledLabel>
            <StyledInput
              id="Street"
              name="Street"
              type="text"
              step="any"
              ref={register({
                required: true,
              })}
            />
          </RowWrapper>
        </Row>
        <Row>
          <RowWrapper>
            <StyledLabel>Street Number</StyledLabel>
            <StyledInput
              id="StreetNumber"
              name="StreetNumber"
              type="text"
              ref={register({
                required: true,
              })}
            />
          </RowWrapper>
          <RowWrapper>
            <StyledLabel>Flat Number</StyledLabel>
            <StyledInput
              id="FlatNumber"
              name="FlatNumber"
              type="number"
              ref={register({
                required: true,
              })}
            />
          </RowWrapper>
        </Row>

        <StyledLabel>floor / key access</StyledLabel>
        <StyledInput
          id="floor/keyAccess"
          name="floor/keyAccess"
          type="text"
          ref={register({
            required: true,
          })}
        />
        <h1>Choose pay method</h1>
        <Row>
          <PayMethodCardWrapper
            id="cash"
            onClick={(e) => setPayMethod(e)}
            isChoosenCash={isChoosenCash}
          >
            <StyledIconHolder isChoosenCash={isChoosenCash}>
              <i class="far fa-money-bill-alt"></i>
            </StyledIconHolder>
          </PayMethodCardWrapper>
          <PayMethodCardWrapper
            id="card"
            onClick={(e) => setPayMethod(e)}
            isChoosenCard={isChoosenCard}
          >
            <StyledIconHolder isChoosenCard={isChoosenCard}>
              <i class="far fa-credit-card"></i>
            </StyledIconHolder>
          </PayMethodCardWrapper>
        </Row>

        <LongButton>Order</LongButton>
      </FormWrapper>
    </MainWrapper>
  );
};

export default AdressForm;
