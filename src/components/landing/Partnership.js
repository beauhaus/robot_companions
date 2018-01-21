import React from 'react';
import styled from 'styled-components';

const StyledPartnership = styled.div`
background: url(./img/buddies.jpg) no-repeat center center; 
background-size: cover;
height: 86vh;
width: 100vw;
display: grid;
grid-template-columns: 1fr 70vw 1fr;
grid-template-rows: 1fr auto 1fr;
    & .partnership-container {
        grid-row:2;
        grid-column: 2;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        & > section {
            width: 100%;
            &.icon-section {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                & img {
                    grid-column: 2;
                  width: 14vw;
                  box-shadow: 4px 4px 6px 3px rgba(0,0,0,0.5);
                }
            }
        }
    }
  
  @media screen and (max-width: 768px) {    //tablet query  
    height: 52vh;
    grid-template-columns: 1fr 80vw 1fr;
    grid-template-rows: 1fr 40vh 1fr;
    & > .partnership-container {
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
    & .icon-section {
        & img {
            margin-top: 50%;
            width: 16vw;
        }
    }
  }
  
  @media screen and (max-width: 376px) {   // iPhone Query 
    height: 86vh;
    text-align: center;
    grid-template-columns: 1fr 80vw 1fr;
    grid-template-rows: 1fr 80vh 1fr;
    & > .partnership-container {
        grid-template-rows: repeat(2, 1fr);
        & section {
            width: 80vw;
        }
        & .text-section {
            margin: 0;
            width: 100%;
            grid-row: 1;
        }
        & h1 {
            font-size: calc(var(--base) * 1.3);
            font-weight: bold;
            & > span {
                font-size: calc(var(--base) * 1.3);
            }
        }
        & p {
           line-height: 2;
           font-size: calc(var(--base) * .55);
        }
        & .icon-section {
            grid-row: 2;
            & .profile-logo {
                width: 20vw;
                height: 30vh;
            }
        }
    }
  }
`
const StyledPartnershipContainer = styled.article`
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

const Partnership = () => (
    <StyledPartnership className="partnership">
        <StyledPartnershipContainer className="partnership-container">
            <section className="text-section">
                <h1>RC <span>Partnership</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    a sit nulla harum ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    reprehenderit ipsa assumenda.
                    harum voluptatibus tempora, officiis a sit nulla.</p>
            </section>
            <section className="icon-section">
                <img className="profile-logo" src="./img/logo/profile-logo-sm.svg" alt="profile-logo-small" />
            </section>
        </StyledPartnershipContainer>
    </StyledPartnership>
)

export default Partnership;