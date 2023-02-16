import React, { useState, useEffect, useRef } from 'react';
import * as S from '../Footer/Footer.style';

const Footer = () => {
return (
<S.FooterWrapper>
  <S.TopContainer>
    <S.Column>
      <S.Title>
        고객 정보 보호
      </S.Title>
      <S.Content>
        개인정보 보호 설정
      </S.Content>
      <S.Content>
        알림 확인하기
      </S.Content>
      <S.Content>
        내 활동
      </S.Content>
      <S.Content>
        신고하기
      </S.Content>
      <S.Content>
        사용자 인증
      </S.Content>
    </S.Column>

    <S.Column>
      <S.Title>
        도움말
      </S.Title>
      <S.Content>
        문제 신고
      </S.Content>
      <S.Content>
        개인정보 및 보안 도움말
      </S.Content>
      <S.Content>
        이용 약관
      </S.Content>
      <S.Content>
        차단된 계정
      </S.Content>
    </S.Column>

    <S.Column>
      <S.Title>
        계정 관리
      </S.Title>
      <S.Content>
        계정 상태
      </S.Content>
      <S.Content>
      채팅 일시 제한
      </S.Content>
      <S.Content>
      계정 추가
      </S.Content>
      <S.Content>
        계정 삭제
      </S.Content>
    </S.Column>

    <S.Column>
      <S.Title>
        로그인 보안
      </S.Title>
      <S.Content>
        저장된 로그인 정보
      </S.Content>
      <S.Content>
        계정 보안 확인
      </S.Content>
      <S.Content>
        개인정보처리방침
      </S.Content>
      <S.Content>
        활동 검토
      </S.Content>
    </S.Column>

    <S.Column>
      <S.Title>
        안전 도구
      </S.Title>
      <S.Content>
       민감한 내용이 포함된 콘텐츠 관리하기
      </S.Content>
      <S.Content>
        연락처 동기화
      </S.Content>
      <S.Content>
        숨겨진 단어
      </S.Content>
      <S.Content>
        피싱 행위에 주의
      </S.Content>
    </S.Column>
    </S.TopContainer>

    <S.BottomContainer>
      <S.Row>
        <S.Info>
          이용약관
        </S.Info>
        <S.Info>
          CM 위치 기반 서비스
        </S.Info>
        <S.Info>
          CM 개인정보처리방침
        </S.Info>
        {/* <S.Info>
          CM 운영정책
        </S.Info>
        <S.Info>
          CM 계정 센터
        </S.Info> */}
      </S.Row>

      <S.Row>
        <S.Info>
        © Cotton Corp. All rights reserved.
        </S.Info>
      </S.Row>
    </S.BottomContainer>
</S.FooterWrapper>
  );
};

export default Footer;
