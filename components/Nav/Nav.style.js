import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const NavWrapper = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
height: 80px;
padding: 0 80px;
border-bottom: 1.5px solid ${({ theme }) => theme.middleGray};
`;
export const LogoContainer = styled.section``;
export const Logo = styled.img`
width: 100px;
`;
export const IconContainer = styled.section`
display: flex;
justify-content: space-between;
height: 40px;
`;
export const SignUp = styled.button`
width: 100px;
height: 100%;
font-size: ${({ theme }) => theme.xLarge};
outline:none;
background: none;
border: none;
border-right: 2px solid ${({ theme }) => theme.middleGray};
`;
export const Info = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 75px;
height: 100%;
outline:none;
background: none;
border: none;
`;