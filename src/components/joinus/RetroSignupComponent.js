
import React from 'react';
import styled from 'styled-components';

import MapFrame from './MapFrame'
import InputPanel from './InputPanel'
import { Link } from 'react-router-dom';


const SignupContainer = styled.div`
position: relative;
background: linear-gradient(35deg, black 0%, #15151d 100%);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const HomeLink = () => (
    <div>
        <Link to="/">Home</Link>
    </div>
)


// A simple container for signup

const RetroSignupComponent = () => (
    <SignupContainer>
        <HomeLink />
        <InputPanel />
        <MapFrame />
    </SignupContainer>
);

export default RetroSignupComponent;