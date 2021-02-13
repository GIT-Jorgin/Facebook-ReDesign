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

    @media (max-width: 620px){
        justify-content: space-between;
    }
`;

export const FacebookLogo = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;

    @media (max-width: 620px){
        margin-left: 20px;
    }
`;

export const FullScreenMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 110vh;
    background-color: white;
    overflow: hidden;
    z-index: 10;
`;

export const FullScreenMenuHeader = styled.div`
    display: flex;
    width: 90%;
    height: 80px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: -40px;
`;

export const FullScreenMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60%;
`;

export const FullScreenMenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 60px;
`;

export const NavConfig = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;

    @media (max-width: 620px){
        display: none;
    }
`;

export const NavMenu = styled.img`
    display: none;
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-right: 20px;
    -webkit-tap-highlight-color: transparent;
    @media (max-width: 620px){
        display: inline;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    width: 50%;
    min-width: 412px;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    @media (max-width: 620px){
        display: none;
    }
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
    -webkit-tap-highlight-color: transparent;
`;

export const User2 = styled.div`
    display: flex;
    width: 55px;
    height: 55px;
    border-radius: 16px;
    border: 2px solid #38B1FF;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    @media (min-width: 620px){
        display: none;
    }
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

    @media (max-width: 854px){
        justify-content: center
    }
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

    @media (max-width: 854px){
        display: none;
    }
`;

export const GhostNav = styled.div`
    display: flex;
    height: 100%;
    max-width: 130px;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 854px){
        display: none
    }
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
    width: 64%;
    height: 100%;

    @media (max-width: 1051px){
        width: 84%
    }
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

    @media (max-width: 736px){
        margin-top: 40px;
    }

    @media (max-width: 638px){
        margin-top: 30px;
    }

    @media (max-width: 528px){
        margin-top: 20px;
    }

    @media (max-width: 484px){
        margin-top: 10px;
    }

    @media (max-width: 433px){
        margin-top: -10px;
    }
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

    @media (max-width: 1168px){
        width: 160px;
        height: 220px;
    }

    @media (max-width: 1051px){
        width: 180px;
        height: 240px;
    }


    @media (max-width: 995px){
        width: 160px;
        height: 220px;
    }

    @media (max-width: 854px){
        width: 150px;
        height: 210px;
    }

    @media (max-width: 736px){
        width: 130px;
        height: 190px;
    }

    @media (max-width: 638px){
        width: 110px;
        height: 170px;
    }

    @media (max-width: 528px){
        width: 100px;
        height: 160px;
    }

    @media (max-width: 482px){
        width: 90px;
        height: 150px;
        border-radius: 14px;
    }

    @media (max-width: 432px){
        width: 80px;
        height: 140px;
    }
`;

export const StoreUser = styled.img`
    width: 60px;
    height: 60px;
    margin-top: -30px;
    border-radius: 100px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @media (max-width: 736px){
    width: 50px;
    height: 50px;
    margin-top: -25px;
    }

    @media (max-width: 432px){
    width: 40px;
    height: 40px;
    margin-top: -20px;
    }
`;

export const StorieUserName = styled.h3`
    color: white;
    font-size: 18px;
    letter-spacing: 1.3px;
    text-shadow: 0px 2px 4px #000000;
    font-weight: 500;
    font-family: 'Roboto';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 638px){
        font-size: 16px;
    }

    @media (max-width: 528px){
        font-size: 14px;
    }

    @media (max-width: 482px){
        font-size: 12px;
    }
`;

export const GhostChats = styled.div`
    display: none;
    width: 8%;
    height: 100%;

    @media (min-width: 855px) and (max-width: 1051px){
        display: inline;
    }
`;

export const ChatsContainer = styled.div`
    width: 22%;
    height: 100%;

    @media (max-width: 1051px){
        display: none
    }
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
    border-bottom-left-radius: 50px;

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
    height: 120px;
    background-color: #FFF;
    box-shadow: 0px 0px 0px rgba(209,209,207,0.2), 0 0px 10px rgba(193,193,191,0.3);
`;

export const ChatsUserName = styled.h5`
    margin-top: 5px;
    font-size: 14px;
    color: #8092A8;

    @media (max-width: 1128px){
        font-size: 13px;
    }
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

    @media (max-width: 1128px){
        width: 20%;
        height: 42px;
    }
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

export const CardChart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    border-radius: 20px;
    width: 85%;
    height: 200px;
    background-color: #FFF;
    box-shadow: 0px 0px 0px rgba(209,209,207,0.2), 0 0px 10px rgba(193,193,191,0.3);
`;

export const FeedContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 854px){
        justify-content: center;
    }
`;

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    margin-top: 100px;

    @media (max-width: 854px){
        width: 100%;
        align-items: center;
    }

    @media (max-width: 638px){
        margin-top: 50px;
    }

    @media (max-width: 482px){
        margin-top: 20px;
    }

    @media (max-width: 432px){
        margin-top: 10px;
    }
`;

export const Post = styled.div`
    display: flex;
    width: 95%;
    height: 230px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #FFF;
    box-shadow: 0px 0px 0px rgba(209,209,207,0.2), 0 0px 10px rgba(193,193,191,0.3);
`;

export const PostIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 55%;
    height: 50px;

    @media (max-width: 745px){
        justify-content: space-around;
    }

    @media (max-width: 627px){
        width: 65%;
    }

    @media (max-width: 627px){
        justify-content: space-between;
    }

    @media (max-width: 451px){
        width: 75%;
    }

    @media (max-width: 385px){
        width: 85%;
    }
`;

export const PostInput = styled.textarea`
    color: #899BB0;
    font-family: 'Arial';
    font-size: 16px;
    width: 83%;
    height: 25%;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid #DAE4F0;
    resize: none;

    &:focus{
        outline: none;
    }

    &::placeholder{
        font-family: 'Arial';
        color: #B2C1D3;
    }
`;

export const PostSubmit = styled.button`
    font-family: 'Roboto';
    font-size: 16px;
    letter-spacing: 1px;
    width: 89%;
    height: 40px;
    margin-top: 20px;
    font-weight: 500;
    cursor: pointer;
    color: #5FA8FF;
    border: 1px solid #5FA8FF;
    background-color: #F4F9FE;
    border-radius: 5px;
    margin-bottom: 15px;
    -webkit-tap-highlight-color: transparent;

    &:focus{
        outline: none;
    };

    &:hover{
        background-color: #DCEEFF;
    }
`;

export const PostsTitle = styled.h4`
    margin-top: 30px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #8092A8;
    font-size: 16px;
    letter-spacing: 1.5px;
    margin-right: auto;

    @media (max-width: 854px){
        margin-left: 15px;
    }
`;

export const FeedPosts = styled.div`
    display: flex;
    width: 95%;
    height: 500px;
    margin-top: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #FFF;
    margin-bottom: 30px;
    box-shadow: 0px 0px 0px rgba(209,209,207,0.2), 0 0px 10px rgba(193,193,191,0.3);

    @media (max-width: 854px){
        height: 570px;
    }

    @media (max-width: 784px){
        height: 540px;
    }

    @media (max-width: 722px){
        height: 510px;
    }

    @media (max-width: 668px){
        height: 485px;
    }

    @media (max-width: 502px){
        height: 435px;
    }

    @media (max-width: 426px){
        height: 380px;
    }
`;

export const FeedPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 92%;
    height: 90%;
`;

export const FeedPostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 55px;
`;

export const FeedPostPic = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 15px;
    cursor: pointer;
`;

export const FeedPostUser = styled.div`
    width: 76%;
    height: 100%;

    @media (max-width: 605px){
        width: 70%;
    }

    @media (max-width: 475px){
        width: 60%;
    }

    @media (max-width: 400px){
        width: 57%;
    }
`;

export const FeedPostIMG = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    margin-top: -10px;

    @media (max-width: 558px){
        height: 250px;
    }

    @media (max-width: 502px){
        height: 210px;
        border-radius: 20px;
    }

    @media (max-width: 426px){
        height: 170px;
    }
`;

export const PostDescript = styled.h5`
    margin-top: 40px;
    font-family: 'Roboto';
    font-size: 15.5px;
    color: #8092A8;
    font-weight: 400;

    @media (max-width: 502px){
        margin-top: 30px;
    }
`;

export const FeedPostOptions = styled.img`
    display: flex;
    font-family: 'Roboto';
    flex-direction: column;
    width: 35px;
    height: 35px;
    border-radius: 12px;
    justify-content: space-between;
    cursor: pointer;
`;

export const FeedpostContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const FeedPostAcions = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 40px;
`;

export const Friends = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    margin-top: 110px;

    @media (max-width: 854px){
        display: none
    }
`;

export const Friendstitle = styled.h4`
    font-family: 'Roboto';
    font-weight: bold;
    color: #8092A8;
    font-size: 16px;
    letter-spacing: 1.5px;
`;

export const FriendsCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0px 0px 0px rgba(209,209,207,0.2), 0 0px 10px rgba(193,193,191,0.3);
`;

export const FriendUserPic = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    background-color: cyan;
`;

export const FriendInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    height: 100%;
`;

export const FriendOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 58px;
    height: 70px;
    border-radius: 20px;
    margin-right: 12px;
`;

export const OnlineFriends = styled.div`
    display: flex;
    width: 100%;
    margin-top: -30%;
    height: 100%;
    align-items: center;
    flex-direction: row;
`;

export const Footer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
`;