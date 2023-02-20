import React from 'react';
import * as S from './Info.style';
import Fade from 'react-reveal/Fade';

const Info = () => {
  return (
  <S.InfoWrapper>
    <S.InfoContainer>
      <Fade clear>
      <S.LogoContainer>
        <S.Logo src='/images/Logo/cotton-logo.png' />
      </S.LogoContainer>
      </Fade>
      <Fade clear delay={500}>
      <S.InfoTitle>
        반려동물과 사람
      </S.InfoTitle>
      </Fade>
      <Fade clear delay={700}>
      <S.InfoContent>
        {'우리가 함께하는 세상을\n 만들어가는 메신저\n 그 이상의 공간. \n 회원가입을 통해 즐겨보세요.'}
      </S.InfoContent>
      </Fade>
    </S.InfoContainer>
  </S.InfoWrapper>
  );
};

export default Info;
