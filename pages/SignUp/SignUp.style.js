import styled from 'styled-components';

export const SignUpWrapper = styled.section`
display: flex;
justify-content: center;
height: 750px;
align-items: center;
`;
export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
height: 550px;
`;
export const SingUpInfo = styled.form``;
export const Title = styled.p`
margin-bottom: 70px;
font-size: ${({ theme }) => theme.huge};
font-weight: ${({ theme }) => theme.bold};
`;
export const InputWrapper = styled.div`
`;
export const CheckboxContainer = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`;
export const Policy = styled.input`
width: 20px;
height: 20px;
margin-right: 6px;
accent-color: ${({ theme }) => theme.black};
`;
export const CheckboxContent = styled.p`
font-size: 14px;
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
export const Test = styled.img`
width: 100px;
`;