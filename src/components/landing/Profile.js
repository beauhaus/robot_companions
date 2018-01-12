import React from 'react';
import styled from 'styled-components';


const StyledProfile = styled.div`
height: 86vh;
width: 100vw;
color: black
background-color: grey;
// border: 2px solid navy;
background: url(./img/buddies.jpg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  // tablet query
  @media screen and (max-width: 768px) {
    height: 42vh;
    & > .profile-container {
        justify-content: space-between;
        width: 85vw;
        padding-top: 0;
        & > section {
            margin-top: 3vh;
            width: 40vw;
        }
        & > section#profile-pic-section {
            
            & > img {
                margin-left: -3vw;
                width: 32vw;
            }
        }
        & > section#text-section {
            height: 280px;
            margin-top: 6vh;
            // & h1, span {
            // font-size: 1.2rem;            
        }
        & p {
            font-size: 0.5rem;
            line-height: 2.6;
        }
    }
  }
  // iPhone Query
  @media screen and (max-width: 376px) {
    height: 90vh;
  }
`
const StyledProfileContainer = styled.article`
margin: auto;
color: #1d2535;
padding: 2vh 1vw;
// border: 2px solid maroon;
height: 100%;
width: 68vw;
display: flex;
flex-direction: row;
justify-content: space-around;
padding-top: 8%;
& > section {
    &#profile-pic-section {
        padding: 5%;
    }
    width: 50%;
    & h1 {
        font-size: 2rem;
        color: #1d2535;
        & > span {
            color: #831212;
            font-size: 2rem;
        }
    }
    & p {
        margin-top: 2vh;
        line-height: 3;
        font-family: sans-serif;
        font-size: 0.7rem;
        color: black;
    }
    & img {
        width: 25vw;
        box-shadow: 4px 4px 6px 3px rgba(0,0,0,0.8);
        margin: 0;
    }
}
// iPhone Query
@media screen and (max-width: 376px) {
    height: 90vh;
    padding: 0;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40vh 45vh;
    justify-content: space-between;
    
      & #text-section {
          margin:0;
          padding: 0;
          padding-top: 5%;
          text-align: center;
          grid-row: 1;
          width: 100%;
          & h1, span {
              font-size: 1rem;
          }
          & p {
            text-align: center;
            color: black;
            line-height: 2;
        }
      }
      & #profile-pic-section {
          grid-row: 2;
          width: 100%;
            & > img#profile-image {
                width: 90%;
                margin:0;
            }
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
    <StyledProfile className="profile">
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
