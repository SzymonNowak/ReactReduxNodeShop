/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useForm, Controller } from "react-hook-form";
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
const Styledelect = styled.select`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const AdressForm = () => {
  const { register, handleSubmit, errors, control } = useForm();
  const [isChoosenCard, setChooseCard] = useState(false);
  const [isChoosenCash, setChooseCash] = useState(false);

  const onSubmit = (itemContent) => {
    console.log(itemContent);
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
        <Styledelect
          id="payMethod"
          name="payMethod"
          ref={register({
            required: true,
          })}
        >
          <option value="cash">cash</option>
          <option value="card">card</option>
        </Styledelect>
        <LongButton>Order</LongButton>
      </FormWrapper>
    </MainWrapper>
  );
};

export default AdressForm;
