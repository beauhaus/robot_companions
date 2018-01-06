import React from 'react';
import styled from 'styled-components';

const HeaderLinks = styled.ul`
  grid-column: 2;
  grid-row: 2;
  text-align: right;
  border: 1px solid yellow;
  & li a {
    color: #1BA3CC;
  }
`
const NavLinks = () => (
    <HeaderLinks className="header-right-links">
        <li>
            <a href="#">RC PARTNERSHIP</a>
        </li>
        <li>
            <a href="#">RC PROFILE</a>
        </li>
    </HeaderLinks>
)
export default NavLinks;