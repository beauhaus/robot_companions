import React from 'react';
import styled from 'styled-components';


const StyledProfile = styled.div`
height: 86vh;
width: 100vw;
color: black
position: relative;
background-color: grey;
background: url(./img/profile-background.jpg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media screen and (max-width: 768px) {      // tablet query
    height: 42vh;
    
    & > .profile-container {
        justify-content: space-between;
        width: 85vw;
        & > section {
            padding-top 4vw;
            &#profile-pic-section {
                & > img {
                    width: 35vw;
                }
            }
        }
     }
  }
  @media screen and (max-width: 376px) {      // iPhone Query
    height: 90vh;
    & > .profile-container {
        height: 90vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40vh 45vh;
          & #text-section {
              text-align: center;
              grid-row: 1;
              padding: 0;
              width: 100%;
              & h1, span {
                  font-size: calc(var(--base)*1.6); 
              }
          }
          & #profile-pic-section {
              grid-row: 2;
              text-align: center;
              width: 100%;
                & > img#profile-image {
                    width: 90%;
                }
             }
    }
  }
`
const StyledProfileContainer = styled.article`
  margin: auto;
    color: #1d2535;

    height: 100%;
    width: 68vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2% auto;
& > section {
    padding: 12vh 5%;
    width: 50%;
    &#text-section {
        & p {
            line-height: 2.1;
            font-family: sans-serif;
            font-size: calc(var(--base) * 0.65);
            }        
    }
    & h1 {
        font-size:  calc(var(--base) * 1.6);
        color: #1d2535;
        & > span {
            color: #831212;
            font-size: calc(var(--base) * 1.6);
        }
    }
    & img {
        width: 27vw;
        box-shadow: 4px 4px 6px 3px rgba(0,0,0,0.8);
        margin: 4vh 0;
    }
}
`


/**
 * A "state-less" component that simply contains a picture and some text.
 * The only remarkable thing is the behavior of the <section>s at the breakpoints.
 * 
 * I don't love the positioning or size of the image and plan to fix it.
 */
const Profile = () => (
    <StyledProfile className="profile" id="profile">
        <StyledProfileContainer className="profile-container">
            <section id="profile-pic-section">
                <img id="profile-image" src="./img/profile-pic.jpg" alt="profile-pic" />
            </section>
            <section id="text-section">
                <h1>Our <span>Profile</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                a sit nulla harum ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                reprehenderit ipsa assumenda.
                harum .</p>
            </section>
        </StyledProfileContainer>
    </StyledProfile>
)

export default Profile;
