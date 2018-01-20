import React from 'react';
import styled from 'styled-components';

const HeaderLinks = styled.nav`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: auto auto;
  &  a {
    text-decoration: none;
    grid-row: 2;
    color: #1BA3CC;
  }
`
const NavLinks = () => (
      <HeaderLinks className="header-links">
            <a href="#partnership">RC PARTNERSHIP</a>
            <a href="#profile">RC PROFILE</a>
      </HeaderLinks>
)
export default NavLinks;