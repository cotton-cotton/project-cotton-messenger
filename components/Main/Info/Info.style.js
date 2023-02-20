import styled, { keyframes } from 'styled-components';

export const InfoWrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 600px;
padding: 100px 0;
`;
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 300px;
height: 300px;
`;
export const LogoContainer = styled.div``;
export const Logo = styled.img`
width: 300px;
`;
export const InfoTitle = styled.p`
font-size: 30px;
font-weight: 700;
`;
export const InfoContent = styled.p`
font-size: 20px;
text-align: center;
white-space: pre-wrap;
line-height: 30px;
`;