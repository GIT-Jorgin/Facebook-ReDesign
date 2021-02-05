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
    PostIcons
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
import robot from '../../images/icons/robot_icon.png';
import ReactApexChart from 'react-apexcharts';
import gallery from '../../images/icons/gallery.png';
import claquete from '../../images/icons/claquete.png';
import list1 from '../../images/icons/post_list__icon.png';
import musicalNote from '../../images/icons/musicalNote.png';
import map from '../../images/icons/map.png';
import list2 from '../../images/icons/list.png';
import folder from '../../images/icons/folder.png'


export default function Home(){
    const [ chartData ] = [{
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
                <GhostNav></GhostNav>
                <Sidenav>
                    <img style={{marginTop: '-60%', cursor: 'pointer'}} width={45} alt="settings icon" src={add} />
                    <Sidemenu>
                        <img style={{cursor: 'pointer'}} width={35} alt="email icon" src={email} />
                        <img style={{cursor: 'pointer'}} width={35} alt="search icon" src={search} />
                        <img style={{cursor: 'pointer'}} width={35} alt="notification icon" src={notification} />
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
                    <Feed>
                        <PostsTitle>NOVO POST</PostsTitle>
                        <Post>
                            <PostIcons>
                                <img style={{cursor: 'pointer'}} alt="gallery" width="25" src={gallery} />
                                <img style={{cursor: 'pointer'}} alt="claquete" width="25" src={claquete} />
                                <img style={{cursor: 'pointer'}} alt="list" width="25" src={list1} />
                                <img style={{cursor: 'pointer'}} alt="Musical note" width="25" src={musicalNote} />
                                <img style={{cursor: 'pointer'}} alt="map" width="25" src={map} />
                                <img style={{cursor: 'pointer'}} alt="list 2" width="25" src={list2} />
                                <img style={{cursor: 'pointer'}} alt="folder" width="25" src={folder} />
                            </PostIcons>
                            <PostInput placeholder="Sua mensagem" />
                            <PostSubmit>PUBLICAR</PostSubmit>
                        </Post>
                    </Feed>
                </Container>
                <ChatsContainer>
                    <ChatsTitle>ULTIMAS CONVERSAS</ChatsTitle>
                    <ChatsContent>
                        <ChatsCard>
                            <ChatsCardContainer>
                                <CardHeader>
                                    <CardHeaderUser src={user5} />
                                    <CardHeaderUserInfo>
                                        <h5 style={{marginTop: 5, fontSize: 14, color: '#8092A8'}}>Thais Fernandes</h5>
                                        <span style={{marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8'}}>Há 12 min atrás</span>
                                    </CardHeaderUserInfo>
                                    <img alt="messenger" width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{color: '#8092A8', fontSize: 12}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                            </ChatsCardContainer>
                        </ChatsCard>
                        <ChatsCard>
                            <ChatsCardContainer>
                                <CardHeader>
                                        <CardHeaderUser src={user6} />
                                        <CardHeaderUserInfo>
                                            <h5 style={{marginTop: 5, fontSize: 14, color: '#8092A8'}}>Rafael Sousa</h5>
                                            <span style={{marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8'}}>Há 33 min atrás</span>
                                        </CardHeaderUserInfo>
                                        <img alt="messenger"  width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{color: '#8092A8', fontSize: 12}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                             </ChatsCardContainer>
                        </ChatsCard>
                        <ChatsCard>
                            <ChatsCardContainer>
                                <CardHeader>
                                    <CardHeaderUser src={user7} />
                                    <CardHeaderUserInfo>
                                        <h5 style={{marginTop: 5, fontSize: 14, color: '#8092A8'}}>Amanda Bastos</h5>
                                        <span style={{marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8'}}>Há 52 min atrás</span>
                                    </CardHeaderUserInfo>
                                    <img alt="messenger"  width="35" height="35" src={messenger} />
                                </CardHeader>
                                <CardContent>
                                    <p style={{color: '#8092A8', fontSize: 12}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </CardContent>
                            </ChatsCardContainer>
                        </ChatsCard>
                        <CardChart>
                            <ChatsCardContainer>
                                <CardHeader style={{marginTop: -15, justifyContent: 'flex-start'}}>
                                    <CardHeaderUser style={{marginLeft: 5}} src={robot} />
                                    <CardHeaderUserInfo style={{marginLeft: 10}}>
                                        <h5 style={{marginTop: 5, fontSize: 14, color: '#8092A8'}}>Robô assistente</h5>
                                        <span style={{marginTop: -20, fontSize: 12, marginBottom: 5, color: '#8092A8'}}>Há 3 dias atrás</span>
                                    </CardHeaderUserInfo>
                                </CardHeader>
                                <CardContent style={{marginTop: 45}}>
                                    <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={130} />
                                </CardContent>
                            </ChatsCardContainer>
                        </CardChart>
                    </ChatsContent>
                </ChatsContainer>
            </MainContainer>
        </Body>
    )
}