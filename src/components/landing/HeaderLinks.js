import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const HeaderLinks = styled.nav`
  text-align: right;
  grid-column: 2;
  grid-row: 2;
  & > a {
    margin-left: 1vw;
    font-size: .6rem;
    text-decoration: none;
    color: #1BA3CC;
  }
  // iPad Query
  @media screen and (min-width: 768px) {
    & > a {
      margin-left: 3vw;
    }
}
  @media screen and (max-width: 375px) {
    display: none;
  }
  
`

const NavLinks = () => (
    <BrowserRouter>
      <HeaderLinks>
            <a href="#partnership">RC PARTNERSHIP</a>
            <a href="#profile">RC PROFILE</a>
      </HeaderLinks>
    </BrowserRouter>
)
export default NavLinks;