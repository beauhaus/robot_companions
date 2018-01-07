import React from 'react';
import styled from 'styled-components';

const StyledPartnership = styled.div`
height: 86vh;
color: black
border: 2px solid navy;
background: url(./img/buddies.jpg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
//   // tablet query
//     @media screen and (max-width: 768px) {
//     height: 52vh;
//     }
//     @media screen and (max-width: 768px) {
//         height: 85vh;
//         & > .partnership-container {
//             margin-top: 8vh;
//         }
//     }
`
const StyledPartnershipContainer = styled.article`
margin: auto;
color: #1d2535;
padding: 2vh 1vw;
border: 2px solid maroon;
height: 100%;
width: 68vw;
display: flex;
flex-direction: row;
justify-content: space-around;
padding-top: 8%;
& > section {
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
        box-shadow: 4px 4px 6px 3px rgba(0,0,0,0.8);
        margin: 0 10vw;
    }
} 

`

const Partnership = () => (
    <StyledPartnership className="partnership">
        <StyledPartnershipContainer className="partnership-container">
            <section id="text-section">
                <h1>RC <span>Partnership</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    a sit nulla harum ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    reprehenderit ipsa assumenda.
                    harum .</p>
            </section>
            <section id="icon-section">
                <img src="./img/logo/profile-logo-sm.svg" alt="profile-logo-small" />
            </section>
        </StyledPartnershipContainer>
    </StyledPartnership>
)

export default Partnership;