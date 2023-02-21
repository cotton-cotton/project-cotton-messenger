import React from 'react';
import * as S from '../ServiceStart/ServiceStart.style';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

const ServiceStart = () => {
return (
  <S.ServiceWrapper>
  <S.ServiceContainer>
    <Fade clear>
  <S.LogoContainer>
  <S.Logo src='/images/Logo/cotton-logo.png' alt='logo' />
  </S.LogoContainer>
  <S.ServiceContent>
    {'우리라는 이름의 \n 모든 소통의 시작, 코튼톡'}
  </S.ServiceContent>
  </Fade>
  <S.ButtonContainer>
  <Jump>
  <S.SignUp>회원가입</S.SignUp>
  </Jump>
  <Jump>
  <S.SignIn>로그인</S.SignIn>
  </Jump>
  </S.ButtonContainer>
  </S.ServiceContainer>
</S.ServiceWrapper>
)
};

export default ServiceStart;