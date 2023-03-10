import React from 'react';
import * as S from '../Main/Main.style';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

const Main = () => {
  return (
  <S.MainWrapper>
    <S.Intro>
      <S.IntroContainer>
        <Fade bottom>
      <S.IntroTitle>COTTON TALK</S.IntroTitle>
      <S.IntroContent>{'반려동물과 세상을 잇는 \n첫 소통의 시작, 코튼톡'}</S.IntroContent>
      </Fade>
      <S.ContentImgContainer>
      <S.ContentImg src='/images/ContentImg/contentImg.png' alt='logo' />
      </S.ContentImgContainer>
      </S.IntroContainer>
    </S.Intro>
  </S.MainWrapper>
  );
};

export default Main;
