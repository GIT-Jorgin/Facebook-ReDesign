import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #F0EBEF;
`;

export const Nav = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: 90px;
    justify-content: space-around;
    align-items: center;
`;

export const NavContainer = styled.div`
    display: flex;
    width: 50%;
    min-width: 412px;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

export const Navlink = styled.div`
    display: flex;
    flex-direction: column;
    width: 4%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const User = styled.div`
    display: flex;
    width: 55px;
    height: 55px;
    border-radius: 16px;
    border: 2px solid #38B1FF;
    justify-content: center;
    align-items: center;
`;

export const NavActive = styled.div`
    width: 40px;
    height: 3px;
    border-radius: 100px;
    background-color: #38B1FF;
    margin-top: 88px;
    position: absolute;
    -webkit-box-shadow: 0px 0px 8px 1px rgba(56,177,255,0.67); 
    box-shadow: 0px 0px 8px 1px rgba(56,177,255,0.67);
`;


