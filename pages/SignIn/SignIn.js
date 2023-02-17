import React from 'react';
import * as S from '../SignIn/SignIn.style';
import InputBox from '../../components/InputContainer/InputContainer';
import { SignInData } from './SignInData';

const SignIn = () => {
  return (
  <S.SignInWrapper>
    <S.SignInContainer>
      <S.SignInInfo>
        <S.Title>로그인</S.Title>
        {SignInData.map((list, index) => {
          return (
            <InputBox
            key={index}
            id={list.id}
            name={list.name}
            title={list.title}
            placeholder={list.placeholder}
            text={list.text}
            type={list.type}
            message={list.message}
            />
          )
        })}
      </S.SignInInfo>
      <S.ButtonContainer>
        <S.Submit
        type='button'
        >
          확인
        </S.Submit>
      <S.Cancel
      type='button'
      >
        취소
      </S.Cancel>
      </S.ButtonContainer>
    </S.SignInContainer>
  </S.SignInWrapper>
  );
};

export default SignIn;
