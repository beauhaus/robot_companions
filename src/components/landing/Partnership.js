import React from 'react';
import styled from 'styled-components';

const StyledPartnership = styled.div`
height: 86vh;
width: 100vw;
background-color: grey;
background: url(./img/buddies.jpg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  & #icon-section {
      & img {
        width: 14vw;
        box-shadow: 4px 4px 6px 3px rgba(0,0,0,0.8);
        margin:  0 10vw;    
      }
  }
  
  @media screen and (max-width: 768px) {    //tablet query  
    height: 52vh;
    padding: 10% 0;
    & > .partnership-container {
        width: 80vw;
        padding-top: 0;
        & h1, span {
            font-size: calc(var(--base) * 1.6);
        }
        & p {
            font-size: calc(var(--base) * .65);
        }
    }
    & #icon-section {
        padding-top: 3vh;
        & img {
            width: 16vw;
        }
    }
  }
  
  @media screen and (max-width: 376px) {   // iPhone Query 
    height: 86vh;
    text-align: center;
    & > .partnership-container {
        flex-direction: column;
        width: 100vw;
        padding-top: 3vh;
        & #text-section {
            margin: 0;
            width: 100%;
        }
        & h1{
            width: 100%;
            font-size: calc(var(--base) * 1.7);
            font-weight: bold;
            & > span {
                font-size: calc(var(--base) * 1.7)
                font-weight: bold;
            }
        }
        & p {
           line-height: 2;
           font-size: calc(var(--base) * .7);
        }
        & #icon-section {
            height: 30vh;
            margin: 0 auto;
            & > img {
                width: 22vw;
            }
        }
    }
  }
`
const StyledPartnershipContainer = styled.article`
    margin: 0 auto;
    color: #1d2535;
    padding: 0 1vw;
    height: 100%;
    width: 68vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 4%;
& > section {
    width: 50%;
    & h1 {
        font-size: calc(var(--base) * 1.7);
        color: #1d2535;
        font-weight: lighter;
        & > span {
            color: #831212;
            font-size: calc(var(--base) * 1.7);
        }
    }
    & p {
        width: 98%;
        margin-top: -2vh;
        line-height: 2.5;
        font-family: sans-serif;
        font-size: calc(var(--base) * .65);
        color: black;
    }
}
`
/**
 * A "Stateless functional" component that does nothing very interesting.
 * I tried to mimic the design of http://baseball.doosan.com/ as closely 
 * as possible. This component's breakpoints and styling are an attempt to
 * accomplish this.
 */

const Partnership = () => (
    <StyledPartnership className="partnership" id="partnership">
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