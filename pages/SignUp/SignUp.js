import React, { useState } from 'react';
import * as S from './SignUp.style';
import InputBox from '../../components/InputContainer/InputContainer';
import { SignUpData } from './SignUpData';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
  });

  const [nameVal, setNameVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const [confirmPasswordVal, setConfirmPasswordVal] = useState(false);
  const [checkboxActive, setCheckboxActive] = useState(false);

  const { userName, userEmail, userPassword, userConfirmPassword } = inputValue;

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
  userPassword.length >= 1 &&
  userConfirmPassword.length >= 1;

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

  const isPasswordEqual = event => {
    const value = event.target.value;
    userPassword === value ? setConfirmPasswordVal(true) : setConfirmPasswordVal(false);
  };

  const isCheckboxActive = () => {
    setCheckboxActive(!checkboxActive);
  };

  const isValidForm =
  isValidLetter &&
  emailReg.test(userEmail) &&
  passwordReg.test(userPassword) &&
  confirmPasswordVal &&
  checkboxActive;

  return (
  <S.SignUpWrapper>
    <S.SignUpContainer>
      <S.SingUpInfo>
        <S.Title>????????????</S.Title>
        {SignUpData.map((list, index) => {
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
              isPasswordEqual(event);
            }}
            nameVal={nameVal}
            emailVal={emailVal}
            passwordVal={passwordVal}
            confirmPasswordVal={confirmPasswordVal}
            />
          )
        })}
        <S.CheckboxContainer>
          <S.Policy
          type='checkbox'
          onClick={isCheckboxActive}
          isCheckboxActive={isCheckboxActive}
          />
          <S.CheckboxContent>
            ???????????? ?????? ????????? ???????????????.
          </S.CheckboxContent>
        </S.CheckboxContainer>
      </S.SingUpInfo>
      <S.ButtonContainer>
        <S.Submit
        type='button'
        disabled={isValidForm ? false : true}
        isValidForm={isValidForm}
        onClick={() => router.push('/SignIn/SignIn')}
        >
          ??????
        </S.Submit>
        <S.Cancel
        type="button"
        >
          ??????
        </S.Cancel>
       </S.ButtonContainer>
    </S.SignUpContainer>
  </S.SignUpWrapper>
  );
};

export default SignUp;
