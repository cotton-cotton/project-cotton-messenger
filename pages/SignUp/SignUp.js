import React from 'react';
import * as S from './SignUp.style';
import InputContainer from '../../components/InputContainer/InputContainer';
import { SignUpData } from '../SignUp/SignUpData';

const SignUp = () => {
  return (
  <S.SignUpWrapper>
    <S.SignUpContainer>
      <S.SingUpInfo>
        <S.Title>회원가입</S.Title>
        {SignUpData.map((list, index) => {
          return (
            <S.InputWrapper key={index}>
            <InputContainer
            key={index}
            id={list.id}
            name={list.name}
            placeholder={list.placeholder}
            text={list.text}
            type={list.type}
            message={list.message}
            />
            </S.InputWrapper>
          )
        })}
      </S.SingUpInfo>
    </S.SignUpContainer>
  </S.SignUpWrapper>
  );
};

export default SignUp;
