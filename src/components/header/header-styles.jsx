import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleAndLogoContainer = styled.div`
flex-basis: min-content;
`;

export const HeaderContainer = styled.div`
 height: 80px;
 width: 100%;
 display: flex;
 justify-content: space-between;
 margin-bottom: 25px;
 background-color: #cccccc;
`;

export const LogoContainer = styled(Link)`
 height: 100%;
 width: 70px;
 padding: 25px;
 margin-left: 45px;
 &:hover {
 transform: scale(1.1);
 transition: transform 200ms;
`

export const TitleContainer = styled(Link)`
 height: 100%;
 width: 70px;
 font-size: 25px;
 padding: 25px;
 margin-top: 40px;
 margin-left: 20px;
 &:hover {
 transform: scale(1.1);
 transition: transform 200ms;
 
`;

export const OptionsContainer = styled.div`
 width: 50%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`;