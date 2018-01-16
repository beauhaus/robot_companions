import React from 'react';
import styled from 'styled-components';
// import Mobile from './Mobile';

const StyledJoinHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(30deg, black 60%, grey 100%);
    height: 8vh;
    width: 100vw;
    z-index: 20;
    border-bottom: 1px solid #6b1212;    
    & > img {
        height: 100%;
        border: 1px solid grey;
    }
    // tablet query
    @media screen and (min-width: 768px) {
        // border: 1px solid yellow;
     
    }
    // iPhone query
    @media screen and (max-width: 376px) {
        height: 10vh;
         img#header-icon {
            position: absolute;
            top: 0;
            left: 1vw;
            height: 100%;
     }

}
`

const JoinHeader = () => (
    <StyledJoinHeader className="join-header" id="join-header">
            <img id="header-icon" src="img/horiz-icon.svg" alt="brand-icon" />
    </StyledJoinHeader>
)
export default JoinHeader;
