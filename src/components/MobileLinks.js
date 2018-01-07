import React from 'react';
import styled from 'styled-components';

const StyledMobileLinks = styled.div`
    text-align: left;
    margin-top: 12vh;
    padding: 10%;
    & a {
        margin-top: 7vh;
        display: block;
        font-size: 30px;
        color: coral;
    }
`

const MobileLinks = () => {
    return (
        <StyledMobileLinks>
            <a href="#">RC Partnership</a>
            <a href="#">RC Profile</a>
        </StyledMobileLinks>
    )
}

export default MobileLinks;