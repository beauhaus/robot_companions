import React from 'react';
import styled from 'styled-components';
import HeroVid from './HeroVid';

const StyledHeroSection = styled.div`
    margin-top: 8vh;
    width: 100vw;
    height: 52vh;
    background: #5e2318;
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
    overflow: hidden;
    & > .hero-content-container {
        grid-column: 2;
        grid-row: 2;
        width: 80vw;
        height: 20vh;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr;
        justify-content: space-around;
        & > .hero-text {
            text-align: center;
            font-size: calc(var(--base) * 3);
            margin: 0 auto;
        }
        & > button.watch-vid-btn {
            margin: 0 auto;
            font-size: calc(var(--base) * .8);
            width: 30vw;
        }
    }

@media screen and (max-width: 768px) {  // tablet query
    height: 28vh;
    & > .hero-content-container {
        height: 15vh;
        & > .hero-text {
            font-size: calc(var(--base) * 2.2);
        }
    }
    & > .watch-vid-btn {
        height: 8vh;    
        font-size: calc(var(--base) * .8);
    }
}

@media screen and (max-width: 376px) {     // iPhone query
    height: 45vh;
    grid-template-rows: 10vh auto 1fr;
    & > .hero-content-container {
        width: 95vw;
        grid-gap: 2vh;
        height: 25vh;
        &  > h1.hero-text {
            font-size: calc(var(--base) * 2);
        }
        & > #watch-vid-btn {
            font-size: calc(var(--base) * .8);
            height: 10vh;
            width: 70vw;
            padding: 2vh;
            }
        }
    }
`

const HeroText = styled.h1`
    mix-blend-mode: color-dodge;
    color: #ecc7c7;
    font-weight: lighter;
    ${StyledHeroSection}:hover & {
            color: white;
        }
  }
`

const WatchVidBtn = styled.button`
    background-color: transparent;
    color: #ecb875;
    border: 1px solid #ecb875;
    border-radius: 200px;
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
        <div className="hero-content-container">
            <HeroText className="hero-text">ROBOT COMPANIONS</HeroText>
            <WatchVidBtn id="watch-vid-btn" className="watch-vid-btn">WATCH VIDEO</WatchVidBtn>
        </div>
        <HeroVid />
    </StyledHeroSection>
)
export default Hero;