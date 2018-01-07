import React from 'react';
import HeaderLinks from './HeaderLinks';
import styled from 'styled-components';
import Mobile from './Mobile';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(30deg, black 60%, grey 100%);
    height: 8vh;
    width: 100vw;
    z-index: 20;
    border-bottom: 1px solid #6b1212;
    @media screen and (max-width: 375px) {
        height: 10vh;
    }
    & > div.header-content-container {
        width: 86vw;
        height: 6vh;
        margin: 1vh 7vw;
        display: grid;
        grid-template-columns: 1fr  25vw;
        grid-template-rows: repeat(3, 1fr);
        // border: 1px solid teal;
        & > #header-links{
            @media screen and (max-width: 375px) {
                display: none;
            }
        }
    }
    
}
`

const HeaderIcon = styled.img`
    height: 100%;
    grid-row: 1/-1;
    grid-column: 1;
    border: 2px solid grey;
    @media screen and (max-width: 374px) {
        position: absolute;
        top: .5vh;
        left: 2vw;
        height: 9vh;
 }
`



const Header = () => (
    <StyledHeader className="default-header" id="default-header">
        <div className="header-content-container">
            <HeaderIcon src="img/top-left-header-icon.svg" alt="brand-icon" />
            <HeaderLinks id="header-links"/>
            <Mobile/>
        </div>
    </StyledHeader>
)
export default Header;
