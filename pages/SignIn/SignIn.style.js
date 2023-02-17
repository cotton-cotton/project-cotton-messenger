import styled from 'styled-components';

export const SignInWrapper = styled.section`
display: flex;
justify-content: center;
height: 700px;
align-items: center;
`;
export const SignInContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
height: 550px;
`;
export const SignInInfo = styled.form``;
export const Title = styled.p`
margin-bottom: 70px;
font-size: ${({ theme }) => theme.huge};
font-weight: ${({ theme }) => theme.bold};
`;
export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 180px;
margin-top: 30px;
`;
export const Submit = styled.button`
width: 80px;
height: 35px;
color: ${({ theme }) => theme.black};
background-color: ${({ isValidForm }) => isValidForm ? '#aeb9f2' : '#babab8'};
border: 1px solid ${({ theme }) => theme.middleGray};
border-radius: 4px;
`;
export const Cancel = styled.button`
width: 80px;
height: 35px;
background-color: ${({ theme }) => theme.lightGray};
border: 1px solid ${({ theme }) => theme.middleGray};
border-radius: 4px;
`;