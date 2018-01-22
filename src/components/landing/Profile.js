import React from 'react';
import styled from 'styled-components';

const StyledProfile = styled.div`
height: 86vh;
width: 100vw;
background-color: grey;
background: url(./img/profile-background.jpg) no-repeat center center; 
background-size: cover;
display: grid;
grid-template-columns: 1fr 70vw 1fr;
grid-template-rows: 1fr auto 1fr;

& .profile-container {
    grid-row:2;
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & > section {   
        width: 100%;
        &.profile-pic-section {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            grid-template-rows: 1fr auto 1fr;
            & img {
              grid-column: 2;
              grid-row: 2;
              width: 28vw;
              box-shadow: 4px 4px 6px 3px rgba(0,0,0,0.5);
            }
        }
    }
}

@media screen and (max-width: 768px) {    //tablet query  
    height: 52vh;
    grid-template-columns: 1fr 80vw 1fr;
    grid-template-rows: 1fr 40vh 1fr;
    & > .profile-container {
        & section {
            height: 40vh;
        }
        & h1, span {
            font-size: calc(var(--base) * 1.5);
        }
        & p {
            font-size: calc(var(--base) * .6);
        }
    }
  }


@media screen and (max-width: 376px) {      // iPhone Query
    height: 90vh;
    grid-template-columns: 1fr 80vw 1fr;
    grid-template-rows: 1fr 80vh 1fr;
    & > .profile-container {
        grid-template-columns: 1fr;
        grid-template-rows: 40vh 45vh;
        & .profile-text-section {
            text-align: center;
            grid-row: 1;
            padding: 0;
            width: 100%;
            & h1, span {
                font-size: calc(var(--base)*1.6); 
            }
            & p {
                line-height: 2.2;
            }
        }
        & .profile-pic-section {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            grid-template-rows: 1fr auto 1fr;
            & > img#profile-image {
                grid-row: 2;
                width: 50vw;
            }
        }
    }
}
`
const StyledProfileContainer = styled.article`
    color: #1d2535;
    & > section {
        & h1, span {
            font-size: calc(var(--base) * 2.8);
            font-weight: lighter;
        }
        &  h1 {
            color: #1d2535;
        }
        &  span {
            color: #831212;
        }
        & p {
            line-height: 3;
            font-family: sans-serif;
            font-size: calc(var(--base)* .8);
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
            <section className="profile-pic-section">
                <img id="profile-image" src="./img/profile-pic.jpg" alt="profile-pic" />
            </section>
            <section className="profile-text-section">
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