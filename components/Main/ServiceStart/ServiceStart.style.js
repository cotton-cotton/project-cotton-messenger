import styled from 'styled-components';

export const ServiceWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
padding: 100px 0;
margin-bottom: 100px;
`;
export const ServiceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 250px;
`;
export const LogoContainer = styled.div``;
export const Logo = styled.img`
width: 150px;
`;
export const ServiceTitle = styled.p`
font-size: 30px;
font-weight: 700;
`;
export const ServiceContent = styled.p`
font-size: 30px;
font-weight: 700;
text-align: center;
white-space: pre-wrap;
line-height: 40px;
`;
export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 50px;
`;
export const SignUp = styled.button`
width: 135px;
height: 40px;
background-color: ${({ theme }) => theme.mainBlue};
color: ${({ theme }) => theme.black};
font-size: 18px;
font-weight: 500;
border: none;
border-radius: 70px;
`;
export const SignIn = styled.button`
width: 135px;
height: 40px;
background-color: ${({ theme }) => theme.mainBlue};
color: ${({ theme }) => theme.black};
font-size: 18px;
font-weight: 500;
border: none;
border-radius: 70px;
`;