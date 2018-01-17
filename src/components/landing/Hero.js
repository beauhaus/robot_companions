import React from 'react';
import styled from 'styled-components';
import HeroVid from './HeroVid';

const StyledHeroSection = styled.div`
    font-family: 'Orbitron', sans-serif;
    margin-top: 8vh;
    width: 100vw;
    height: 52vh;
    background: #5e2318;
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;

   @media screen and (max-width: 768px) {  // tablet query
    grid-template-rows: 1vh 1vh 1fr;
    height: 28vh;
    .hero-text {

        font-size: calc(var(--base) * 1.4);
        grid-row: 1;
        grid-column: 2;
        margin-top: 8vh;
    }
    & > #watch-vid-btn {
        top: 50%;
        width: 40vw;
        margin-left: -20vw;
        height: 6vh;    
    }
}
@media screen and (max-width: 376px) {     // iPhone query
    height: 45vh;
    text-align: center;
    &  > h1#hero-text {
        margin-top: 8vh;
        text-align: center;
        font-size: calc(var(--base) * 2);
    }

    & #watch-vid-btn {
        font-size: .8rem;
        font-size: calc(var(--base) * X);
        width: 80vw;
        height: 10vh;
        padding: 2vh;
        top: 55%;
        left: 50%;
        margin-left: -40vw;  
        }
    }
`

const HeroText = styled.h1`
    mix-blend-mode: color-dodge;
    color: #ecc7c7;
    font-weight: lighter;
    margin: auto;
    grid-row: 2;
    grid-column: 2;  
    margin-top: 18vh;
    &#hero-text {
        font-size: 2.5rem;
        font-size: calc(var(--base) * X);
    }
  ${StyledHeroSection}:hover & {
        color: white;
      }
  }
`

const WatchVidBtn = styled.button`
    background-color: transparent;
    color: #ecb875;
    border: 1px solid #ecb875;
    font-size: .5rem;
    font-size: calc(var(--base) * X);
    border-radius: 200px;
    position: absolute;
    width: 24vw;
    height: 8vh;
    padding: 2vh;
    top: 55%;
    left: 50%;
    margin-left: -12vw;
    z-index: 12;
    ${StyledHeroSection}:hover & {
        color: white;
        border: 1px solid white;
        cursor: pointer;
        transform: scale(1.1);
        transition: transform .2s; 
       }
`
const Hero = () => (
    <StyledHeroSection className="hero-section">
        <HeroText id="hero-text" className="hero-text">ROBOT COMPANIONS</HeroText>
        <WatchVidBtn id="watch-vid-btn">WATCH VIDEO</WatchVidBtn>
        <HeroVid />
    </StyledHeroSection>
)
export default Hero;