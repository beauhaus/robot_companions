import React from 'react';
import styled from 'styled-components';

const HeroBGVid = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-height: 52vh;
    mix-blend-mode: multiply;
    object-fit: cover;
    /* object-position: top 75%; */
    height: initial; 
    display: initial;
    // iPhone query
    @media screen and (max-width: 375px) {
      top: 4vh;
      transform: scale(1.5);
     }   
`
class HeroVid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: 'https://dl.dropbox.com/s/ln84nmt3ty2zy2v/lipstickrobot.mp4?dl=0'
        }
    }

    render() {
        return (
            <HeroBGVid id="hero-bg-vid" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                This Browser cannot display this video type.
            </HeroBGVid>
        )
    }
}

export default HeroVid;