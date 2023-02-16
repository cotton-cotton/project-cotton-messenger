import styled from 'styled-components';

export const InputWrapper = styled.section`
`;
export const InputContainer = styled.div`
width: 250px;
`;
export const InputTitle = styled.p`
margin-bottom: 10px;
font-size: 16px;
font-weight: 500;
`;
export const InputBox = styled.input`
width: 100%;
height: 35px;
margin-bottom: 20px;
border: none;
outline: none;
border-bottom: ${({ id, focus }) =>
    focus === id ? '2px solid #8092f7' : '1px solid #7f7b7b'};
&::placeholder {
  font-size: 14px;
}
`;
export const ValidationMsg = styled.p`
margin-top: -6px;
padding-bottom: 10px;
color: ${({ theme }) => theme.middleGray};
font-size: 13px;
`;