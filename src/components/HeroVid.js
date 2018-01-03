import React from 'react';

class HeroVid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: 'https://dl.dropbox.com/s/ln84nmt3ty2zy2v/lipstickrobot.mp4?dl=0'
        }
    }

    render() {
        return (
            <video id="hero-bg-vid" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
}

export default HeroVid;