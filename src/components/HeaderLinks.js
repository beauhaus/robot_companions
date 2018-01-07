import React from 'react';
import styled from 'styled-components';

const HeaderLinks = styled.nav`
  text-align: right;
  grid-column: 2;
  grid-row: 2;
  & > a {
    margin-left: 1vw;
    font-size: .6rem;
    color: #1BA3CC;
  }
  @media screen and (max-width: 375px) {
    display: none;
  }
  
`

const NavLinks = () => (
    <HeaderLinks>
            <a href="#">RC PARTNERSHIP</a>
            <a href="#">RC PROFILE</a>
    </HeaderLinks>
)
export default NavLinks;