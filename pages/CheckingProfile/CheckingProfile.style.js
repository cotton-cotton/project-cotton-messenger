import styled from 'styled-components';

export const CheckingProfileWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 700px;
`;
export const CheckingProfileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 400px;
height: 320px;
`;
export const ProfileBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
height: 230px;
`;
export const ProfileImg = styled.img`
width: 180px;
height: 180px;
border-radius: 90px;
`;
export const ProfileName = styled.p`
font-size: 22px;
font-weight: 700;
`;
export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 380px;
`;
export const Cancel = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 180px;
height: 35px;
font-size: 16px;
border: 1px solid black;
border-radius: 10px;
background: none;
cursor: pointer;
`;
export const Confirm = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 180px;
height: 35px;
font-size: 16px;
border: 1px solid black;
border-radius: 10px;
background: none;
cursor: pointer;
`;