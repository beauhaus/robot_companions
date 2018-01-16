
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
  height: 100vh;
  margin: 0 auto auto 0;
  overflow: hidden;
  & a {
      font-family: "Quicksand", sans-serif;
      text-decoration: none;
      color: teal;
      font-weight: lighter;
      position: absolute;
      width: 15vw;
      right: 50vw;
      margin-right: -7.5vw;
      top: 2vh;
      height: 8vh;
      text-align: center;
      font-size: 1.4rem;
      z-index: 20;
        &:hover {
            color: white;
        }
        // iPhone query
        @media screen and (max-width: 376px) {
            right: 20vw;
            top: 3vh;
        }
  }
  
`









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
    </SignupContainer>
);

export default RetroSignupComponent;