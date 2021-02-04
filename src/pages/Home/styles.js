import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #F2F7FD;
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
    justify-content: space-between;
`;

export const Sidenav = styled.div`
    position: fixed;
    display: flex;
    height: 100%;
    max-width: 130px;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const GhostNav = styled.div`
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
    width: 60%;
    height: 100%;
`;

export const Stories = styled.div`
    width: 100%;
    height: 240px;
`;

export const StoriesTitle = styled.h4`
    margin-top: 30px;
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
    background-color: cyan;
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

export const ChatsContainer = styled.div`
    width: 22%;
    height: 100%;
`;

export const ChatsTitle = styled.h4`
    margin-top: 30px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #8092A8;
    font-size: 16px;
    letter-spacing: 1.5px;
`;

export const ChatsContent = styled.div`
    display: flex;
    background-color: #E3EFFD;
    align-items: center;
    flex-direction: column;
    border-top-left-radius: 50px;
    margin-top: 30px;
    width: 100%;
    height: 100%;
`;

export const ChatsCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    border-radius: 20px;
    width: 85%;
    height: 130px;
    background-color: #FFF;
    box-shadow: 0px 0px 0px rgba(209,209,207,0.2), 0 0px 10px rgba(193,193,191,0.3);
`;

export const ChatsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 85%;
`;
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    width: 100%;
    height: 46px;
`;

export const CardHeaderUser = styled.img`
    width: 20%;
    height: 46px;
    background-color: cyan;
    border-radius: 10px;
`;

export const CardHeaderUserInfo = styled.div`
    display: flex;
    font-family: 'Roboto';
    flex-direction: column;
    width: 55%;
    height: 46px;
    justify-content: space-between;
`;

export const CardContent = styled.div`
    display: flex;
    width: 100%;
    height: 58px;
    align-items: center;
`;