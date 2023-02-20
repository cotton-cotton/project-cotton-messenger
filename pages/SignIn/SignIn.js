import React, { useState } from 'react';
import * as S from '../SignIn/SignIn.style';
import InputBox from '../../components/InputContainer/InputContainer';
import { SignInData } from './SignInData';
import Link from "next/Link";

const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
  });

  const [nameVal, setNameVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);

  const { userName, userEmail, userPassword } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidLetter =
  userName.length >= 1 &&
  userEmail.length >= 1 &&
  userPassword.length >= 1;

  const emailReg = new RegExp('[a-zA-Z0-9.-]\\.[a-zA-Z]{2,6}$');
  const passwordReg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}'
  );

  const letterValidation = event => {
    const value = event.target.value;
    if (value.length > 1) {
      setNameVal(true);
      setPasswordVal(true);
    } else if (value.length <= 1) {
      setNameVal(false);
      setPasswordVal(false);
    }
  }

  const emailValidation = event => {
    const value = event.target.value;
    if (emailReg.test(value)) {
      setEmailVal(true);
    } else if (!emailReg.test(value)) {
      setEmailVal(false);
    }
  };

  const passwordValidation = event => {
    const value = event.target.value;
    if (passwordReg.test(value)) {
      setPasswordVal(true);
    } else if (!passwordReg.test(value)) {
      setPasswordVal(false);
    }
  };

  const isValidForm =
  isValidLetter &&
  emailReg.test(userEmail) &&
  passwordReg.test(userPassword);


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
            onChange={event => {
              handleInput(event);
              letterValidation(event);
              emailValidation(event);
              passwordValidation(event);
            }}
            nameVal={nameVal}
            emailVal={emailVal}
            passwordVal={passwordVal}
            />
          )
        })}
      </S.SignInInfo>
      <S.ButtonContainer>
        <Link href='/Main/Main'>
        <S.Submit
        type='button'
        disabled={isValidForm ? false : true}
        isValidForm={isValidForm}
        >
          확인
        </S.Submit>
        </Link>
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
