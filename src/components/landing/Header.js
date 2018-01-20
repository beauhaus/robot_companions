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
    display: grid;
    grid-template-columns: 1fr 86vw 1fr;
    grid-template-rows: 1fr 6vh 1fr;
    & > div.header-content-container {
        grid-column: 2;
        grid-row: 2;
        display: grid;
        grid-template-columns: 14vw auto 28vw;
        & > img {
            height: 100%;
            border: 1px solid grey;
        }
    }

    @media screen and (min-width: 768px) {     // tablet query
        & > div.header-content-container {
            grid-template-columns: 1fr 45vw;
            & .header-links {
                & a {
                    margin-left: 3vw;
                    font-size: calc(var(--base) * .6);
                }
            }
        }
    }

    @media screen and (max-width: 376px) {    // iPhone query
        height: 10vh;
        & > div img#header-icon {
            position: absolute;
            top: 0;
            left: 1vw;
            height: 100%;
            border-width: 0;
        }
        & > .header-links{
            display: none;
        }
     }

}
`

const Header = () => (
    <StyledHeader className="default-header" id="default-header">
        <div className="header-content-container">
            <img id="header-icon" src="img/horiz-icon.svg" alt="brand-icon" />
            <HeaderLinks/>
            <Mobile/>
        </div>
    </StyledHeader>
)
export default Header;
