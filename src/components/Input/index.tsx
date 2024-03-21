import React from 'react'

import { Controller } from "react-hook-form"

import {InputContainer, InputText, IconContainer, ErrorTxt } from './styles';
import { IInput } from './types';

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: {value, onChange} }) => <InputText value={value} onChange={onChange} {...rest} />} />
      </InputContainer>
      {errorMessage ? <ErrorTxt>{errorMessage}</ErrorTxt> : null}
      <input></input>
    </>
  )
}

export { Input }; 