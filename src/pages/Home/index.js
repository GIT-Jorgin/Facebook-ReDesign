import React, { useState } from 'react';
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
    StoreUser,
    ChatsContainer,
    ChatsTitle,
    ChatsContent,
    ChatsCard,
    GhostNav,
    ChatsCardContainer,
    CardHeader,
    CardHeaderUser,
    CardHeaderUserInfo,
    CardContent,
    CardChart,
    Feed,
    Post,
    PostInput,
    PostSubmit,
    PostsTitle,
    PostIcons,
    FeedPosts,
    FeedPostsContainer,
    FeedPostHeader,
    FeedPostPic,
    FeedPostUser,
    FeedPostOptions,
    FeedpostContent,
    FeedPostAcions,
    FeedContainer,
    Friends,
    FriendsCard,
    FriendUserPic,
    FriendInfo,
    FriendOptions,
    OnlineFriends,
    Friendstitle,
    FacebookLogo,
    NavConfig,
    NavMenu,
    FullScreenMenu,
    FullScreenMenuContainer,
    FullScreenMenuItem,
    ChatsUserName,
    GhostChats,
    FeedPostIMG,
    PostDescript,
    StorieUserName,
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
import add from '../../images/icons/add_icon.png';
import facebook_logo from '../../images/icons/facebook_logo.png';
import settings from '../../images/icons/settings_icon.png';
import profilePicture from '../../images/profilePicture.png';
import stories1 from '../../images/stories/stories1.png';
import stories2 from '../../images/stories/stories2.png';
import stories3 from '../../images/stories/stories3.png';
import stories4 from '../../images/stories/stories4.png';
import user1 from '../../images/stories/users/user1.png';
import user2 from '../../images/stories/users/user2.png';
import user3 from '../../images/stories/users/user3.png';
import user4 from '../../images/stories/users/user4.png';
import messenger from '../../images/icons/messenger_icon.png';
import user5 from '../../images/msg/user1.png';
import user6 from '../../images/msg/user2.png';
import user7 from '../../images/msg/user3.png';
import user8 from '../../images/msg/user4.png';
import user9 from '../../images/msg/user5.png';
import user10 from '../../images/msg/user6.png';
import robot from '../../images/icons/robot_icon.png';
import ReactApexChart from 'react-apexcharts';
import gallery from '../../images/icons/gallery.png';
import claquete from '../../images/icons/claquete.png';
import list1 from '../../images/icons/post_list__icon.png';
import musicalNote from '../../images/icons/musicalNote.png';
import map from '../../images/icons/map.png';
import list2 from '../../images/icons/list.png';
import folder from '../../images/icons/folder.png';
import postPicture from '../../images/PostPicture.png';
import post from '../../images/Post.png';
import postOptions from '../../images/post_options.png';
import like from '../../images/icons/like.png';
import comment from '../../images/icons/comment.png';
import share from '../../images/icons/share.png';
import friend1 from '../../images/friends/user1.png';
import friend2 from '../../images/friends/user2.png';
import friend3 from '../../images/friends/user3.png';
import friend4 from '../../images/friends/user4.png';
import friend5 from '../../images/friends/user5.png';
import friend6 from '../../images/friends/user6.png';
import friend7 from '../../images/friends/user7.png';
import online from '../../images/icons/online.png';
import offline from '../../images/icons/offline.png';
import friend from '../../images/icons/friend.png';
import friendAdd from '../../images/icons/friendAdd.png';
import friendMail from '../../images/icons/friendMail.png';
import navMenu from '../../images/icons/menu.png';

export default function Home() {
    const [openMenu, setOpenMenu] = useState(false);


    function openMenuF(){
        setOpenMenu(true);
        document.body.style.overflow = 'hidden';
    }

    const [chartData] = [{
        series: [{
            name: "dado",
            data: [10, 41, 20, 51, 12, 42, 20]
        }],
        options: {
            chart: {
                height: 130,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                lineCap: 'but',
                width: 2,
                dashArray: 5
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.3
                },
            },
            xaxis: {
                labels: {
                    show: false
                },
                categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'jul'],
            },
            yaxis: {
                show: false
            }
        },


    }]

    return (
        <Body>
            <Nav>
                <FacebookLogo alt="facebook logo" src={facebook_logo} />
                <NavContainer>
                    <Navlink>
                        <img alt="home icon" style={{ width: '25px' }} src={home} />
                        <NavActive></NavActive>
                    </Navlink>
                    <Navlink>
                        <img alt="play icon" style={{ width: '25px' }} src={play} />
                    </Navlink>
                    <Navlink>
                        <img alt="menu icon" style={{ width: '25px' }} src={menu} />
                    </Navlink>
                    <User>
                        <img alt="profile" style={{ width: 50, borderRadius: 10 }} src={profilePicture} />
                    </User>
                    <Navlink>
                        <img alt="user icon" style={{ width: '25px' }} src={user} />
                    </Navlink>
                    <Navlink>
                        <img alt="trend icon" style={{ width: '25px' }} src={ray} />
                    </Navlink>
                    <Navlink>
                        <img alt="emoji icon" style={{ width: '25px' }} src={emoji} />
                    </Navlink>
                </NavContainer>
                <NavConfig alt="Nav Config" src={settings} />
                <NavMenu onClick={() => openMenuF()} src={navMenu} />
                { openMenu &&
                <FullScreenMenu>
                    <FullScreenMenuContainer>
                        <FullScreenMenuItem>
                            <img alt="home icon" style={{ width: '30px' }} src={home} />
                            <h4 style={{color: '#8092A8', fontSize: 24, fontFamily: 'Roboto', marginTop: '36px', marginLeft: 8}}>INICIO</h4>
                        </FullScreenMenuItem>
                        <FullScreenMenuItem>
                            <img alt="play icon" style={{ width: '30px' }} src={play} />
                            <h4 style={{color: '#8092A8', fontSize: 24, fontFamily: 'Roboto', marginTop: '36px', marginLeft: 8}}>VIDEOS</h4>
                        </FullScreenMenuItem>
                        <FullScreenMenuItem>
                            <img alt="menu icon" style={{ width: '30px' }} src={menu} />
                            <h4 style={{color: '#8092A8', fontSize: 24, fontFamily: 'Roboto', marginTop: '36px', marginLeft: 8}}>MENU</h4>
                        </FullScreenMenuItem>
                        <FullScreenMenuItem>
                            <img alt="user icon" style={{ width: '30px' }} src={user} />
                            <h4 style={{color: '#8092A8', fontSize: 24, fontFamily: 'Roboto', marginTop: '36px', marginLeft: 8}}>AMIGOS</h4>
                        </FullScreenMenuItem>
                        <FullScreenMenuItem>
                            <img alt="trend icon" style={{ width: '30px' }} src={ray} />
                            <h4 style={{color: '#8092A8', fontSize: 24, fontFamily: 'Roboto', marginTop: '36px', marginLeft: 8}}>TRENDS</h4>
                        </FullScreenMenuItem>
                        <FullScreenMenuItem>
                            <img alt="emoji icon" style={{ width: '30px' }} src={emoji} />
                            <h4 style={{color: '#8092A8', fontSize: 24, fontFamily: 'Roboto', marginTop: '36px', marginLeft: 8}}>PERSONALIZAR</h4>
                        </FullScreenMenuItem>
                        <FullScreenMenuItem>
                            <img alt="emoji icon" style={{ width: '30px' }} src={settings} />
                            <h4 style={{color: '#8092A8', fontSize: 24, fontFamily: 'Roboto', marginTop: '36px', marginLeft: 8}}>CONFIGURAÇÔES</h4>
                        </FullScreenMenuItem>
                    </FullScreenMenuContainer>
                </FullScreenMenu>
                }
            </Nav>
            <MainContainer>
                <GhostNav></GhostNav>
                <Sidenav>
                    <img style={{ marginTop: '-60%', cursor: 'pointer' }} width={45} alt="settings icon" src={add} />
                    <Sidemenu>
                        <img style={{ cursor: 'pointer' }} width={35} alt="email icon" src={email} />
                        <img style={{ cursor: 'pointer' }} width={35} alt="search icon" src={search} />
                        <img style={{ cursor: 'pointer' }} width={35} alt="notification icon" src={notification} />
                    </Sidemenu>
                </Sidenav>
                <Container>
                    <Stories>
                        <StoriesTitle>STORIES</StoriesTitle>
                        <StoriesContainer>
                            <StorieCard image={stories1}>
                                <StoreUser src={user1} />
                                <StorieUserName>JULIANA</StorieUserName>
                            </StorieCard>
                            <StorieCard image={stories2}>
                                <StoreUser src={user2} />
                                <StorieUserName>MAICON</StorieUserName>
                            </StorieCard>
                            <StorieCard image={stories3}>
                                <StoreUser src={user3} />
                                <StorieUserName>ANDRÉ</StorieUserName>
                            </StorieCard>
                            <StorieCard image={stories4}>
                                <StoreUser src={user4} />
                                <StorieUserName>RENATA</StorieUserName>
                            </StorieCard>
                        </StoriesContainer>
                    </Stories>
                    <FeedContainer>
                        <Feed>
                            <PostsTitle>NOVO POST</PostsTitle>
                            <Post>
                                <PostIcons>
                                    <img style={{ cursor: 'pointer' }} alt="gallery" width="25" src={gallery} />
                                    <img style={{ cursor: 'pointer' }} alt="claquete" width="25" src={claquete} />
                                    <img style={{ cursor: 'pointer' }} alt="list" width="25" src={list1} />
                                    <img style={{ cursor: 'pointer' }} alt="Musical note" width="25" src={musicalNote} />
                                    <img style={{ cursor: 'pointer' }} alt="map" width="25" src={map} />
                                    <img style={{ cursor: 'pointer' }} alt="list 2" width="25" src={list2} />
                                    <img style={{ cursor: 'pointer' }} alt="folder" width="25" src={folder} />
                                </PostIcons>
                                <PostInput placeholder="Sua mensagem" />
                                <PostSubmit>PUBLICAR</PostSubmit>
                            </Post>
                            <FeedPosts>
                                <FeedPostsContainer>
                                    <FeedPostHeader>
                                        <FeedPostPic src={postPicture} />
                                        <FeedPostUser>
                                            <h5 style={{ marginTop: 6, fontSize: 16, color: '#8092A8', marginBottom: '-2px', fontFamily: 'Roboto' }}>Isabela Castro</h5>
                                            <span style={{ fontSize: 12, color: '#8092A8', marginBottom: 5 }}>Há 3 min atrás</span>
                                        </FeedPostUser>
                                        <FeedPostOptions src={postOptions} />
                                    </FeedPostHeader>
                                    <FeedpostContent>
                                        <PostDescript>Lorem Ipsum is simply dummy text of the printing and typesetting!</PostDescript>
                                        <FeedPostIMG src={post} />
                                    </FeedpostContent>
                                    <FeedPostAcions>
                                        <img width="20" style={{ marginLeft: 10, cursor: 'pointer' }} src={like} />
                                        <img style={{ marginLeft: 20, cursor: 'pointer' }} width="20" src={comment} />
                                        <img style={{ marginLeft: 20, cursor: 'pointer' }} width="20" src={share} />
                                    </FeedPostAcions>
                                </FeedPostsContainer>
                            </FeedPosts>
                        </Feed>
                        <Friends>
                            <Friendstitle>AMIGOS</Friendstitle>
                            <FriendsCard>
                                <FriendUserPic src={friend1} />
                                <FriendInfo>
                                    <h5 style={{ marginTop: 25, fontSize: 14, color: '#8092A8', fontFamily: 'Roboto' }}>Daniela Matos</h5>
                                    <OnlineFriends>
                                        <img width="15" src={online} />
                                        <h6 style={{fontSize: 13, color: '#3FFF1D', fontFamily: 'Roboto', letterSpacing: .5, marginLeft: 3}}>Online</h6>
                                    </OnlineFriends>
                                </FriendInfo>
                                <FriendOptions>
                                    <img style={{cursor: 'pointer'}} width={16} src={friendMail} />
                                    <img style={{cursor: 'pointer'}} width={16} src={friend} />
                                </FriendOptions>
                            </FriendsCard>
                            <FriendsCard style={{marginTop: 30}}>
                                <FriendUserPic src={friend2} />
                                <FriendInfo>
                                    <h5 style={{ marginTop: 25, fontSize: 14, color: '#8092A8', fontFamily: 'Roboto' }}>Rodrigo Dias</h5>
                                    <OnlineFriends>
                                        <img width="15" src={online} />
                                        <h6 style={{fontSize: 13, color: '#3FFF1D', fontFamily: 'Roboto', letterSpacing: .5, marginLeft: 3}}>Online</h6>
                                    </OnlineFriends>
                                </FriendInfo>
                                <FriendOptions>
                                    <img style={{cursor: 'pointer'}} width={16} src={friendMail} />
                                    <img style={{cursor: 'pointer'}} width={16} src={friend} />
                                </FriendOptions>
                            </FriendsCard>
                            <FriendsCard style={{marginTop: 30}}>
                                <FriendUserPic src={friend3} />
                                <FriendInfo>
                                    <h5 style={{ marginTop: 25, fontSize: 14, color: '#8092A8', fontFamily: 'Roboto' }}>Evelyn Oliveira</h5>
                                    <OnlineFriends>
                                        <img width="15" src={online} />
                                        <h6 style={{fontSize: 13, color: '#3FFF1D', fontFamily: 'Roboto', letterSpacing: .5, marginLeft: 3}}>Online</h6>
                                    </OnlineFriends>
                                </FriendInfo>
                                <FriendOptions>
                                    <img style={{cursor: 'pointer'}} width={16} src={friendMail} />
                                    <img style={{cursor: 'pointer'}} width={16} src={friend} />
                                </FriendOptions>
                            </FriendsCard>
                            <FriendsCard style={{marginTop: 30}}>
                                <FriendUserPic src={friend4} />
                                <FriendInfo>
                                    <h5 style={{ marginTop: 25, fontSize: 14, color: '#8092A8', fontFamily: 'Roboto' }}>Thiago Ferreira</h5>
                                    <OnlineFriends>
                                        <img width="15" src={offline} />
                                        <h6 style={{fontSize: 13, color: '#C70039', fontFamily: 'Roboto', letterSpacing: .5, marginLeft: 3}}>Offline</h6>
                                    </OnlineFriends>
                                </FriendInfo>
                                <FriendOptions>
                                    <img style={{cursor: 'pointer'}} width={16} src={friendMail} />
                                    <img style={{cursor: 'pointer'}} width={16} src={friend} />
                                </FriendOptions>
                            </FriendsCard>
                            <Friendstitle style={{marginTop: 50}}>SUGESTÕES DE AMIZADE</Friendstitle>
                            <FriendsCard>
                                <FriendUserPic src={friend6} />
                                <FriendInfo>
                                    <h5 style={{ marginTop: 25, fontSize: 14, color: '#8092A8', fontFamily: 'Roboto' }}>Ana Clara</h5>
                                    <OnlineFriends>
                                        <img width="15" src={online} />
                                        <h6 style={{fontSize: 13, color: '#3FFF1D', fontFamily: 'Roboto', letterSpacing: .5, marginLeft: 3}}>Online</h6>
                                    </OnlineFriends>
                                </FriendInfo>
                                <FriendOptions>
                                    <img style={{cursor: 'pointer'}} width={16} src={friendMail} />
                                    <img style={{cursor: 'pointer'}} width={16} src={friendAdd} />
                                </FriendOptions>
                            </FriendsCard>
                            <FriendsCard style={{marginTop: 35}}>
                                <FriendUserPic src={friend5} />
                                <FriendInfo>
                                    <h5 style={{ marginTop: 25, fontSize: 14, color: '#8092A8', fontFamily: 'Roboto' }}>Lucas Alves</h5>
                                    <OnlineFriends>
                                        <img width="15" src={offline} />
                                        <h6 style={{fontSize: 13, color: '#C70039', fontFamily: 'Roboto', letterSpacing: .5, marginLeft: 3}}>Offline</h6>
                                    </OnlineFriends>
                                </FriendInfo>
                                <FriendOptions>
                                    <img style={{cursor: 'pointer'}} width={16} src={friendMail} />
                                    <img style={{cursor: 'pointer'}} width={16} src={friendAdd} />
                                </FriendOptions>
                            </FriendsCard>
                            <FriendsCard style={{marginTop: 35}}>
                                <FriendUserPic src={friend7} />
                                <FriendInfo>
                                    <h5 style={{ marginTop: 25, fontSize: 14, color: '#8092A8', fontFamily: 'Roboto' }}>Maria Eduarda</h5>
                                    <OnlineFriends>
                                        <img width="15" src={online} />
                                        <h6 style={{fontSize: 13, color: '#3FFF1D', fontFamily: 'Roboto', letterSpacing: .5, marginLeft: 3}}>Online</h6>
                                    </OnlineFriends>
                                </FriendInfo>
                                <FriendOptions>
                                    <img style={{cursor: 'pointer'}} width={16} src={friendMail} />
                                    <img style={{cursor: 'pointer'}} width={16} src={friendAdd} />
                                </FriendOptions>
                            </FriendsCard>
                        </Friends>
                    </FeedContainer>
                </Container>
                <GhostChats></GhostChats>
                <ChatsContainer>
                    <ChatsTitle>ULTIMAS CONVERSAS</ChatsTitle>
                    <ChatsContent>
                        <ChatsCard>
                            <ChatsCardContainer>
                                <CardHeader>
                                    <CardHeaderUser src={user5} />
                                    <CardHeaderUserInfo>
                                        <ChatsUserName>Thais Fernandes</ChatsUserName>
                                        <span style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8' }}>Há 12 min atrás</span>
                                    </CardHeaderUserInfo>
                                    <img alt="messenger" width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{ color: '#8092A8', fontSize: 12 }}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                            </ChatsCardContainer>
                        </ChatsCard>
                        <ChatsCard>
                            <ChatsCardContainer>
                                <CardHeader>
                                    <CardHeaderUser src={user6} />
                                    <CardHeaderUserInfo>
                                        <ChatsUserName>Rafael Sousa</ChatsUserName>
                                        <span style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8' }}>Há 33 min atrás</span>
                                    </CardHeaderUserInfo>
                                    <img alt="messenger" width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{ color: '#8092A8', fontSize: 12 }}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                            </ChatsCardContainer>
                        </ChatsCard>
                        <ChatsCard>
                            <ChatsCardContainer>
                                <CardHeader>
                                    <CardHeaderUser src={user7} />
                                    <CardHeaderUserInfo>
                                        <ChatsUserName>Amanda Bastos</ChatsUserName>
                                        <span style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8' }}>Há 52 min atrás</span>
                                    </CardHeaderUserInfo>
                                    <img alt="messenger" width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{ color: '#8092A8', fontSize: 12 }}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                            </ChatsCardContainer>
                        </ChatsCard>
                        <CardChart>
                            <ChatsCardContainer>
                                <CardHeader style={{ marginTop: -15, justifyContent: 'flex-start' }}>
                                    <CardHeaderUser style={{ marginLeft: 5 }} src={robot} />
                                    <CardHeaderUserInfo style={{ marginLeft: 10 }}>
                                        <ChatsUserName>Robô assistente</ChatsUserName>
                                        <span style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8' }}>Há 3 dias atrás</span>
                                    </CardHeaderUserInfo>
                                </CardHeader>
                                <CardContent style={{ marginTop: 45 }}>
                                    <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={130} />
                                </CardContent>
                            </ChatsCardContainer>
                        </CardChart>
                        <ChatsCard>
                            <ChatsCardContainer>
                                <CardHeader>
                                    <CardHeaderUser src={user8} />
                                    <CardHeaderUserInfo>
                                        <ChatsUserName>Gabriela Moreira</ChatsUserName>
                                        <span style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8' }}>Há 1 Hora atrás</span>
                                    </CardHeaderUserInfo>
                                    <img alt="messenger" width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{ color: '#8092A8', fontSize: 12 }}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                            </ChatsCardContainer>
                        </ChatsCard>
                        <ChatsCard>
                            <ChatsCardContainer>
                                <CardHeader>
                                    <CardHeaderUser src={user9} />
                                    <CardHeaderUserInfo>
                                        <ChatsUserName>Felipe Smith</ChatsUserName>
                                        <span style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8' }}>Há 1 Hora atrás</span>
                                    </CardHeaderUserInfo>
                                    <img alt="messenger" width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{ color: '#8092A8', fontSize: 12 }}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                            </ChatsCardContainer>
                        </ChatsCard>
                        <ChatsCard style={{marginBottom: 25}}>
                            <ChatsCardContainer>
                                <CardHeader>
                                    <CardHeaderUser src={user10} />
                                    <CardHeaderUserInfo>
                                        <ChatsUserName>Vitoria Rodrigues</ChatsUserName>
                                        <span style={{ marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8' }}>Há 1 Dia atrás</span>
                                    </CardHeaderUserInfo>
                                    <img alt="messenger" width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{ color: '#8092A8', fontSize: 12 }}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                            </ChatsCardContainer>
                        </ChatsCard>
                    </ChatsContent>
                </ChatsContainer>
            </MainContainer>
        </Body>
    )
}