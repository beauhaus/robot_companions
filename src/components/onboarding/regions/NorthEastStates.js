import React from 'react';
import styled from 'styled-components';

const StyledNorthEastSvg = styled.div`
opacity: 1;
height: 100%;
width: 100%;
& > #neStates{
    height: 100%;
    width: 100%;
    display: none;
}
`


class NorthEastSvg extends React.Component {
    constructor(props) {
        super(props);
        // this.homeStateInput = this.homeStateInput.bind(this);
        this.state = {
            // userHomeState: ''
        }
    }
    homeStateInput(pathHomeState) {
        // pathHomeState = pathHomeState.target.id.toUpperCase();
        this.setState({
            // usStateEntry: this.props.pathHomeState
        })
        console.log("homestateInputClick!", pathHomeState)
    }
    render() {
        return (
            <StyledNorthEastSvg id="styledNERegion">
            <svg id="neStates"
            viewBox="0 0 400 400"
            // preserveAspectRatio="none"
            // preserveAspectRatio="xMidYMid meet"
            preserveAspectRatio="xMinYMin meet"
            >
            <radialGradient id="a" cx="200" cy="200" r="199.5006" gradientUnits="userSpaceOnUse">
                <stop offset=".4841" stopOpacity=".8"/>
                <stop offset="1" stopOpacity=".6"/>
                </radialGradient>
                <path fill="url(#a)" d="M1 0h398v400H1z"/>
                <path fill="#0FF" d="M112 200h88v88h-88z"/>
                <path fill="#8CC63F" d="M112 113h88v87h-88z"/>
                <path fill="#93278F" d="M200 200h87v88h-87z"/>
                <path fill="#F4F414" d="M200 113h87v87h-87z"/>
                
            </svg>
            </StyledNorthEastSvg>
        )
    }
}



/*
CENTERING EXAMPLE
.ctr-example2 {
  width: 40vw;
  position: absolute;
  left: 50%;
  margin-left: -20vw;
}
*/


export default NorthEastSvg;