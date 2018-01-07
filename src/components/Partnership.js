import React from 'react';
import styled from 'styled-components';

const StyledPartnership = styled.div`
height: 86vh;
color: black
position: absolute;
border: 2px solid navy;
background: url(./img/buddies.jpg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  // tablet query
    @media screen and (max-width: 768px) {
    height: 52vh;
    }
    @media screen and (max-width: 768px) {
        height: 85vh;
        & > .partnership-container {
            margin-top: 8vh;
        }
    }
`
const StyledPartnershipContainer = styled.article`
margin: auto;
color: #1d2535;
padding: 18vh 0.5%;
border: 1px solid maroon;
height: 54vh;
width: 70vw;
position: relative;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
& > section#text-section {
    position: relative;
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
    
} 
    & img {
        position: absolute;
        width: 12vw;
        top: 0;
        left: 50%;
        margin-left: -6vw;
        box-shadow: 4px 4px 6px 1px rgba(0,0,0,0.5);
    }
    // tablet query
    @media screen and (max-width: 768px) {
        background: red;
        position: relative;
        & > section#text-section {
            width: 50%;

            position: absolute;
            top: 2vh;
            & p {
                font-size: .6rem;
            }
            & > h1 {
                display: block
                position: absolute:
                top: 2vh;
                font-size: 1.2rem;
                & > span {
                    font-size: 1.2rem;
                }
            }
        }
        &  img {
            width: 12vw;
            top: 0;
            right: 50%;
            margin-right: 6vw;    
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