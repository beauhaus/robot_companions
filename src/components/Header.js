import React from 'react';
import NavLinks from './NavLinks';
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(30deg, black 60%, grey 100%);
    height: 8vh;
    width: 100vw;
    display: grid;
    z-index: 30;
    border-bottom: 1px solid #6b1212;
    @media screen and (max-width: 375px) {
        height: 10vh;
        }   
`
const NavGridContainer = styled.div`
    width: 80vw;
    margin: auto;   
    display: grid;
    grid-template-columns: 1fr  auto;
    grid-template-rows: repeat(3, auto);
    border: 1px solid fuchsia;
    @media screen and (max-width: 375px) {
        width: 100vh;
    }   
`
const HeaderIcon = styled.img`
grid-row: 1/-1;
  grid-column: 1;
  border: 1px solid darkgrey;
`

const Header = () => (
    <StyledHeader>
        <NavGridContainer className="inner-nav-grid-container">
            <HeaderIcon src="img/top-left-header-icon.svg" alt="brand-icon" />
            <NavLinks />
        </NavGridContainer>
    </StyledHeader>
)
export default Header;