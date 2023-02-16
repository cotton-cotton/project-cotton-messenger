import React, { useState, useEffect, useRef } from 'react';
import * as S from '../Nav/Nav.style';
import { BsQuestionCircle } from 'react-icons/bs';

const Nav = () => {
return (
<S.NavWrapper>
  <S.LogoContainer>
    <S.Logo src='/images/Logo/cotton-logo.png' alt='logo' />
  </S.LogoContainer>
  <S.IconContainer>
    <S.SignUp>SignUp</S.SignUp>
    <S.Info><BsQuestionCircle size='20'/></S.Info>
  </S.IconContainer>
</S.NavWrapper>
  );
};

export default Nav;
