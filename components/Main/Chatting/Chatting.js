import React from 'react';
import * as S from '../Chatting/Chatting.style';
import ChattingSlider from '../ChattingSlider/ChattingSlider';
import Slide from 'react-reveal/Slide';

const Chatting = () => {
  return (
  <S.ChattingWrapper>
    <S.ChattingContainer>
      <S.ContentContainer>
        <Slide right>
      <S.ChattingTitle>
        무료채팅
      </S.ChattingTitle>
      </Slide>
      <S.ChattingContent>
      <Slide right delay={500}>
       <S.FirstRow>회원가입을 통해 무료로 소통해보세요.</S.FirstRow>
       </Slide>
       <Slide right delay={700}>
       <S.SecondRow>소중한 인연, 소중한 가족</S.SecondRow>
       </Slide>
      </S.ChattingContent>
      </S.ContentContainer>

      <S.Slider>
        <ChattingSlider />
      </S.Slider>
    </S.ChattingContainer>
  </S.ChattingWrapper>
  );
};

export default Chatting;
