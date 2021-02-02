import React from 'react';
import {
    Body,
    Nav,
    Navlink,
    NavContainer,
    User,
    NavActive,
    Sidenav,
    Sidemenu,
    MainContainer,
    Container,
    Stories,
    StoriesTitle,
    StoriesContainer,
    StorieCard,
    StoreUser
} from './styles';
import home from '../../images/icons/home_icon.png';
import play from '../../images/icons/play_icon.png';
import menu from '../../images/icons/menu_icon.png';
import user from '../../images/icons/user_icon.png';
import ray from '../../images/icons/ray_icon.png';
import email from '../../images/icons/email_icon.png';
import search from '../../images/icons/search_icon.png';
import notification from '../../images/icons/notification_icon.png';
import emoji from '../../images/icons/emoji_icon.png';
import add from '../../images/icons/add_icon.png'
import facebook_logo from '../../images/icons/facebook_logo.png'
import settings from '../../images/icons/settings_icon.png'
import profilePicture from '../../images/profilePicture.png';
import stories1 from '../../images/stories/stories1.png'
import stories2 from '../../images/stories/stories2.png'
import stories3 from '../../images/stories/stories3.png'
import stories4 from '../../images/stories/stories4.png'
import user1 from '../../images/stories/users/user1.png'
import user2 from '../../images/stories/users/user2.png'
import user3 from '../../images/stories/users/user3.png'
import user4 from '../../images/stories/users/user4.png'


export default function Home(){
    return(
        <Body>
            <Nav>
                <img alt="facebook logo" style={{width: 35, height: 35, cursor: 'pointer'}} src={facebook_logo} />
                <NavContainer>
                    <Navlink>
                        <img alt="home icon" style={{width: '25px'}} src={home} />
                        <NavActive></NavActive>
                    </Navlink>
                    <Navlink>
                        <img alt="play icon" style={{width: '25px'}} src={play} />
                    </Navlink>
                    <Navlink>
                        <img alt="menu icon" style={{width: '25px'}} src={menu} />
                    </Navlink>
                    <User>
                        <img alt="profile" style={{width: 50, borderRadius: 10}} src={profilePicture} />
                     </User>
                    <Navlink>
                        <img alt="user icon" style={{width: '25px'}} src={user} />
                    </Navlink>
                    <Navlink>
                        <img alt="trend icon" style={{width: '25px'}} src={ray} />
                    </Navlink>
                    <Navlink>
                        <img alt="emoji icon" style={{width: '25px'}} src={emoji} />
                    </Navlink>
                </NavContainer>
                <img alt="settings icon" style={{width: 30, height: 30, cursor: 'pointer'}} src={settings} />
            </Nav>
            <MainContainer>
                <Sidenav>
                    <img style={{marginTop: '-60%', cursor: 'pointer'}} width={50} alt="settings icon" src={add} />
                    <Sidemenu>
                        <img style={{cursor: 'pointer'}} width={40} alt="email icon" src={email} />
                        <img style={{cursor: 'pointer'}} width={40} alt="search icon" src={search} />
                        <img style={{cursor: 'pointer'}} width={40} alt="notification icon" src={notification} />
                    </Sidemenu>
                </Sidenav>
                <Container>
                    <Stories>
                        <StoriesTitle>STORIES</StoriesTitle>
                        <StoriesContainer>
                            <StorieCard image={stories1}>
                                <StoreUser src={user1} />
                                <h3 style={{color: 'white', letterSpacing: '1.3px', textShadow: "0px 2px 4px #000000", fontWeight: '500'}}>JULIANA</h3>
                            </StorieCard>
                            <StorieCard image={stories2}>
                                <StoreUser src={user2} />
                                <h3 style={{color: 'white', letterSpacing: '1.3px', textShadow: "0px 2px 4px #000000", fontWeight: '500'}}>MAICON</h3>
                            </StorieCard>
                            <StorieCard image={stories3}>
                                <StoreUser src={user3} />
                                <h3 style={{color: 'white', letterSpacing: '1.3px', textShadow: "0px 2px 4px #000000", fontWeight: '500'}}>ANDRÉ</h3>
                            </StorieCard>
                            <StorieCard image={stories4}>
                                <StoreUser src={user4} />
                                <h3 style={{color: 'white', letterSpacing: '1.3px', textShadow: "0px 2px 4px #000000", fontWeight: '500'}}>RENATA</h3>
                            </StorieCard>
                        </StoriesContainer>
                    </Stories>
                </Container>
            </MainContainer>
        </Body>
    )
}