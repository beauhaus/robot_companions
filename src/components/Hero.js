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

`

const HeroText = styled.h1`
    mix-blend-mode: color-dodge;
    color: #ecc7c7;
    font-size: 2.3em;
    font-weight: lighter;
    margin: auto;
    grid-row: 2;
    grid-column: 2;  
    margin-top: 18vh;
  ${StyledHeroSection}:hover & {
    color: white;
  }
`

const WatchVidBtn = styled.button`
    background-color: transparent;
    color: #ecb875;
    border: 1px solid #ecb875;
    font-size: .6em;
    border-radius: 200px;
    position: absolute;
    width: 24vw;
    height: 10vh;
    padding: 2vh;
    top: 50%;
    left: 50%;
    margin: 5vh 0 0 -12vw;
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
        <HeroText className="hero-text">ROBOT COMPANIONS</HeroText>
        <WatchVidBtn id="watch-vid-btn">WATCH VIDEO</WatchVidBtn>
        <HeroVid />
    </StyledHeroSection>
)
export default Hero;