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
export const ImageWrapper = styled.form`
`;
export const ImageContainer = styled.label`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 250px;
height: 130px;
margin-bottom: 20px;
`;
export const UserImg = styled.img`
width: 100px;
height: 100px;
border-radius: 50px;
cursor: pointer;
`;
export const ImageUpload = styled.input`
display: none;
`;
export const SelectFile = styled.p`
color: ${({ theme }) => theme.black};
font-size: 16px;
font-weight: 500;
cursor: pointer;
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
cursor: pointer;
`;
export const Cancel = styled.button`
width: 80px;
height: 35px;
background-color: ${({ theme }) => theme.lightGray};
border: 1px solid ${({ theme }) => theme.middleGray};
border-radius: 4px;
cursor: pointer;
`;