import React, { useState } from 'react';
import * as S from '../InputContainer/InputContainer.style';

const InputContainer = ({
  id,
  type,
  name,
  title,
  placeholder,
  onChange,
  message,
  nameVal,
  emailVal,
  passwordVal,
  confirmPasswordVal,
}) => {
  const [focus, setFocus] = useState('');
  const [letterMessage, setLetterMessage] = useState(false);

  const isFocusBorder = id => {
    setFocus(id);
  };

  return (
    <S.InputWrapper>
      <S.InputContainer>
      <S.InputTitle>{title}</S.InputTitle>
      <S.InputBox
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => {
          isFocusBorder(id);
          setLetterMessage(true);
        }}
        onBlur={() => {
          setFocus('');
          setLetterMessage(false);
        }}
        focus={focus}
      />
      </S.InputContainer>
      {!nameVal && letterMessage ? (
        <S.ValidationMsg>{message.name}</S.ValidationMsg>
      ) : null}
      {!emailVal && letterMessage ? (
        <S.ValidationMsg>{message.email}</S.ValidationMsg>
      ) : null}
      {!passwordVal && letterMessage ? (
        <S.ValidationMsg>{message.password}</S.ValidationMsg>
      ) : null}
      {!confirmPasswordVal && letterMessage ? (
        <S.ValidationMsg>{message.confirm}</S.ValidationMsg>
      ) : null}
    </S.InputWrapper>
  );
};

export default InputContainer;
