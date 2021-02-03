import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #F0EBEF;
    flex-direction: column;
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
    cursor: pointer;
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
export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Sidenav = styled.div`
    display: flex;
    height: 100%;
    max-width: 130px;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Sidemenu = styled.div`
    display: flex;
    min-width: 70px;
    height: 230px;
    margin-top: 80%;
    border-radius: 100px;
    background-color: white;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const Container = styled.div`
    width: 65%;
    height: 100%;
`;

export const Stories = styled.div`
    width: 100%;
    height: 240px;
    padding: 20px;
`;

export const StoriesTitle = styled.h4`
    font-family: 'Roboto';
    font-weight: bold;
    color: #8092A8;
    font-size: 16px;
    letter-spacing: 1.5px;
`;

export const StoriesContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    align-items: center;
    justify-content: space-between;
`;

export const StorieCard = styled.div`
    display: flex;
    width: 180px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 240px;
    border-radius: 20px;
    background-color: red;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: 100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;

    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

export const StoreUser = styled.img`
    width: 60px;
    height: 60px;
    margin-top: -30px;
    border-radius: 100px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;