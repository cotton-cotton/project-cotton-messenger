import React, { useState, useEffect, useRef } from 'react';
import * as S from '../Nav/Nav.style';
import { useRouter } from 'next/router';
import { BsQuestionCircle } from 'react-icons/bs';

const Nav = () => {
  const router = useRouter();

return (
<S.NavWrapper>
  <S.LogoContainer>
    <S.Logo 
    src='/images/Logo/cotton-logo.png' alt='logo'
    onClick={() => router.push('/')}
     />
  </S.LogoContainer>
  <S.IconContainer>
    <S.SignUp onClick={() => router.push('/SignUp/SignUp')}>SignUp</S.SignUp>
    <S.SignIn onClick={() => router.push('/SignIn/SignIn')}>SignIn</S.SignIn>
  </S.IconContainer>
</S.NavWrapper>
  );
};

export default Nav;
