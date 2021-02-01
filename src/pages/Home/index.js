import React from 'react';
import {Body, Nav, Navlink, NavContainer, User, NavActive} from './styles';
import home from '../../images/icons/home_icon.png';
import play from '../../images/icons/play_icon.png';
import menu from '../../images/icons/menu_icon.png';
import user from '../../images/icons/user_icon.png';
import ray from '../../images/icons/ray_icon.png';
import emoji from '../../images/icons/emoji_icon.png';
import facebook_logo from '../../images/icons/facebook_logo.png'
import settings from '../../images/icons/settings_icon.png'
import profilePicture from '../../images/profilePicture.png';

export default function Home(){
    return(
        <Body>
            <Nav>
                <img style={{width: 35, height: 35}} src={facebook_logo} />
                <NavContainer>
                    <Navlink>
                        <img style={{width: '25px'}} src={home} />
                        <NavActive></NavActive>
                    </Navlink>
                    <Navlink>
                        <img style={{width: '25px'}} src={play} />
                    </Navlink>
                    <Navlink>
                        <img style={{width: '25px'}} src={menu} />
                    </Navlink>
                    <User>
                        <img style={{width: 50, borderRadius: 10}} src={profilePicture} />
                     </User>
                    <Navlink>
                        <img style={{width: '25px'}} src={user} />
                    </Navlink>
                    <Navlink>
                        <img style={{width: '25px'}} src={ray} />
                    </Navlink>
                    <Navlink>
                        <img style={{width: '25px'}} src={emoji} />
                    </Navlink>
                </NavContainer>
                <img style={{width: 30, height: 30}} src={settings} />
            </Nav>
        </Body>
    )
}