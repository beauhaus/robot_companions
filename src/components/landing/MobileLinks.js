import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const StyledMobileLinks = styled.div`
    text-align: left;
    margin-top: 12vh;
    padding: 10%;
    & > a {
        margin-top: 7vh;
        display: block;
        font-size: 30px;
        color: coral;
        text-decoration: none;
    }
`
// <Route path="/joinus" component={RetroSignupComponent} />
const RetroSignupComponent = () => (
    <button>
        <Link id="link-text" to="/joinus">RETRO  SIGNUP</Link>
    </button>
)

const MobileLinks = () => {
    return (
        <BrowserRouter>
            <div>
                <StyledMobileLinks>
                    <RetroSignupComponent />
                    <a href="#partnership">RC Partnership</a>
                    <a href="#profile">RC Profile</a>
                </StyledMobileLinks>
                <Route path="/joinus" component={RetroSignupComponent} />
            </div>
        </BrowserRouter>
    )
}

export default MobileLinks;