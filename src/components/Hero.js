import React from 'react';
import HeroVid from './HeroVid';
const Hero = () => (
    <div className="hero-section">
        <div className="hero-overlay-text">OUR ROBOT COMPANIONS</div>
        <button id="watch-vid-btn">WATCH VIDEO</button>
        <HeroVid />
    </div>
)
export default Hero;