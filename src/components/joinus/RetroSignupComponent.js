
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
  overflow: hidden;
  & a {
      text-decoration: none;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-weight: lighter;
      position: absolute;
      width: 30vw;
      left: 50%;
      top: 2vw;
      margin-left: -15vw;
      font-size: 1rem;
      color: teal;
      z-index: 140;
  }
`
const HomeLink = () => (
    <div >
        <Link to="/">Home</Link>
    </div>
)


// A simple container for signup

const RetroSignupComponent = () => (
    <SignupContainer>
        <JoinHeader />
        <HomeLink id="home-link"/>
        <InputPanel />
        <MapFrame />
    </SignupContainer>
);

export default RetroSignupComponent;