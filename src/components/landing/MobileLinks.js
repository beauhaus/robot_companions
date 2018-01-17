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


const MobileLinks = () => {
    return (
        <BrowserRouter>
            <div>
                <StyledMobileLinks>
                    <a href="#partnership">RC Partnership</a>
                    <a href="#profile">RC Profile</a>
                </StyledMobileLinks>
            </div>
        </BrowserRouter>
    )
}

export default MobileLinks;