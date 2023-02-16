import styled from 'styled-components';

export const FooterWrapper = styled.footer`
display: flex;
flex-direction: column;
border-top: 1.5px solid ${({ theme }) => theme.lightGray};
`;
export const TopContainer = styled.section`
display: flex;
justify-content: space-between;
height: 320px;
padding: 50px 150px;
`;
export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const Title = styled.p`
font-size: ${({ theme }) => theme.large};
font-weight: ${({ theme }) => theme.bold};
`;
export const Content = styled.p`
font-size: ${({ theme }) => theme.medium};
font-weight: ${({ theme }) => theme.normal};
color: ${({ theme }) => theme.lightGray};
`;
export const BottomContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100px;
padding: 25px 150px;
border-top: 1.5px solid ${({ theme }) => theme.lightGray};
`;
export const Row = styled.div`
display: flex;
justify-content: space-between;
width: 500px;
`;
export const Info = styled.p`
color: ${({ theme }) => theme.lightGray};
font-size: ${({ theme }) => theme.medium};
`;