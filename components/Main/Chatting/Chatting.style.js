import styled, { keyframes } from 'styled-components';

export const ChattingWrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 800px;
padding: 100px 0;
`;
export const ChattingContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 600px;
height: 450px;
`;
export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 600px;
height: 100px;
`;
const titleAppear = keyframes`
from {
  transform: translateX(200%);
}
to {
  transform: translateX(0%);
}
`;
const contentAppear = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0%);
}
`;
export const ChattingTitle = styled.p`
font-size: 30px;
font-weight: 700;
/* animation: ${titleAppear} 2s ease-in-out none; */
`;
export const ChattingContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: 500;
line-height: 30px;
`;
export const FirstRow = styled.p`
/* animation: ${contentAppear} 2.5s 3s ease-in-out normal; */
/* animation-delay: 10s; */
`;
export const SecondRow = styled.p`
/* animation: ${contentAppear} 2.5s 3.5s ease-in-out infinite; */
`;
export const Slider = styled.div``;