import React from 'react';
import {Body, Nav, Navlink, NavContainer, User, NavActive, Sidenav, Sidemenu} from './styles';
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

export default function Home(){
    return(
        <Body>
            <Nav>
                <img alt="facebook logo" style={{width: 35, height: 35}} src={facebook_logo} />
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
                <img alt="settings icon" style={{width: 30, height: 30}} src={settings} />
            </Nav>
            <Sidenav>
                <img style={{marginTop: '-60%', cursor: 'pointer'}} width={45} alt="settings icon" src={add} />
                <Sidemenu>
                    <img style={{cursor: 'pointer'}} width={35} alt="email icon" src={email} />
                    <img style={{cursor: 'pointer'}} width={35} alt="search icon" src={search} />
                    <img style={{cursor: 'pointer'}} width={35} alt="notification icon" src={notification} />
                </Sidemenu>
            </Sidenav>
        </Body>
    )
}