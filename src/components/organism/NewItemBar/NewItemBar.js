import React from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { addItem as addItemAction } from '../../../actions/addItemAction';

const Wrapper = styled.div`
  border-left: 8px solid #f39c12;
  z-index: 99;
  position: fixed;
  display: flex;
  padding: 50px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  
`;

const StyledInput = styled(Input)`
  margin-top: 20px;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.orange};
  }
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 30px;
  border-radius: 20px;
  height: 30vh;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.orange};
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  width:220px;
  height:47px;
  font-size:${({ theme }) => theme.fontSize.xxs};
  
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.warning};
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.bold};
`;

const NewItemBar = ({ isVisible, addItem }) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (itemContent) => {
    dispatch(addItemAction(itemContent));
  };

  return (
    <Wrapper isVisible={isVisible}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Add new product</h2>
        <StyledInput
          id="tittle"
          name="tittle"
          placeholder="type name "
          ref={register({
            required: true,
          })}
        />
        {errors.tittle && <ErrorMessage>This field is required </ErrorMessage>}
        <StyledInput
          id="count"
          name="count"
          placeholder="type count "
          ref={register({
            required: true,
          })}
        />
        {errors.count && <ErrorMessage>This field is required</ErrorMessage>}
        <StyledInput
          id="price"
          name="price"
          placeholder="type price "
          ref={register({
            required: true,
          })}
        />
        {errors.price && <ErrorMessage>This field is required</ErrorMessage>}
        <StyledTextArea
          name="description"
          id="description"
          as="textarea"
          placeholder="type description"
          ref={register({
            required: true,
          })}
        />
        {errors.description && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
        <StyledButton type="submit">Add product</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};


export default connect()(NewItemBar);
