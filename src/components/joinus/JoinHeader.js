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
    & > div.join-header-container {
        width: 86vw;
        height: 6vh;
        margin: 1vh 7vw;
        display: grid;
        grid-template-columns: 1fr  25vw;
        grid-template-rows: repeat(3, 1fr);
        // border: 1px solid yellow;
        & > img {
            height: 100%;
            grid-row: 1/-1;
            grid-collumn: 1;
            border: 1px solid grey;
        }
    }
    // tablet query
    @media screen and (min-width: 768px) {
        & > div.join-header-container {
            grid-template-columns: 1fr  45vw;
        }
    }
    // iPhone query
    @media screen and (max-width: 376px) {
        height: 10vh;
        & > div img#header-icon {
            position: absolute;
            top: 0;
            left: 1vw;
            height: 100%;
            border-width: 0;
        }
        & > #header-links{
            display: none;
        }
     }

}
`

const JoinHeader = () => (
    <StyledJoinHeader className="join-header" id="join-header">
        <div className="join-header-container">
            <img id="header-icon" src="img/horiz-icon.svg" alt="brand-icon" />
        </div>
    </StyledJoinHeader>
)
export default JoinHeader;
