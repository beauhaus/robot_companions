import React from 'react';
import RightLinks from './RightLinks';
import styled from 'styled-components';

const StyledNav = styled.nav`
position: fixed;
top: 0;
left: 0;
background-color: #47443f;
height: 8vh;
width: 100vw;
display: grid;
z-index: 30;
`
const NavGridContainer = styled.div`
width: 80vw;
margin: auto;   
display: grid;
grid-template-columns: 1fr  auto;
grid-template-rows: repeat(3, auto);
// border: 1px solid fuchsia;
`
const NavIcon =styled.img`
grid-row: 1/-1;
  grid-column: 1;
`

const Nav = () => (
    <StyledNav>
        <NavGridContainer className="inner-nav-grid-container">
            <NavIcon id="header-left-icon" src="img/top-left-header-icon.svg" alt="brand-icon" />
            <RightLinks />
        </NavGridContainer>
    </StyledNav>
)
export default Nav;