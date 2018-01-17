
import React from 'react';
import styled from 'styled-components';

import MapFrame from './MapFrame'
import InputPanel from './InputPanel'
import { Link } from 'react-router-dom';
import JoinHeader from './JoinHeader';


const SignupContainer = styled.div`
position: relative;
background: linear-gradient(35deg, black 0%, #15151d 100%);


  width: 100vw;
  height: 100vh;       // **** ON PHONES THIS MUST CHANGE*****
  overflow: hidden;
  & a {
      font-family: "Quicksand", sans-serif;
      text-decoration: none;
      color: teal;
      position: absolute;
      width: 15vw;
      right: 50vw;
      margin-right: -7.5vw;
      top: 2vh;
      height: 8vh;
      text-align: center;
      font-size: var(--base);
      z-index: 20;
        &:hover {
            color: white;
        }
    }

// FIXME: These queries violate the single-responsibility***

@media screen and (max-width: 768px) {      // tablet query
    & > #styled-input-panel {
        width: 90vw;
        left: 5vw;
        height: 85vh;
    }
    & > #map-frame-container {
        width: 50vw;
        height: 50vh;
        margin-top: 45vh;
        margin-left: 22vw;
        z-index: 40;
    }
    &  .styled-valid-user {
        width: 60%;
        margin-top: -3vh;
        left: 20%;
    }
    & #monitor-panel-container {
        display: block;
    }
}
    
@media screen and (max-width: 376px) {      // iPhone query
    height: 100vh;       // **** ON PHONES THIS MUST CHANGE*****
    overflow: visible;
  
 & a {
    right: 20vw;
    top: 3vh;
 }
 & > #styled-input-panel {
    width: 100vw;
    left: 0;
    height: 90vh;
}
& > #map-frame-container {
    display:none;
}
& #monitor-panel-container {
    display:none;
}
&  .styled-valid-user {
    width: 60%;
    margin-top: -3vh;
    left: 20%;
}
}
`
// @media screen and (max-width: 768px) {      // tablet query
// }

// @media screen and (max-width: 376px) {      // iPhone Query
 
// }

const StyledMonitorPanel = styled.div`
    position: absolute;
    height: 32vh;
    width: 85vw;
    left: 7.5vw;
    bottom: 4vh;
    background: linear-gradient(35deg, #1b1b22 0%, #000 100%);
    border: 8px solid black;
    border-radius: 2px;
    z-index: 3;
    display: none;
`

const MonitorPanel = () => (
    <StyledMonitorPanel id="monitor-panel-container">
        <div id="monitor-panel-inner"></div>
    </StyledMonitorPanel>
)


const HomeLink = () => (
    <div >
        <Link to="/">HOME</Link>
    </div>
)

// A simple container for signup
const RetroSignupComponent = () => (
    <SignupContainer className="signup-container">
        <JoinHeader />
        <HomeLink id="home-link"/>
        <InputPanel />
        <MapFrame />
        <MonitorPanel />
    </SignupContainer>
);

export default RetroSignupComponent;