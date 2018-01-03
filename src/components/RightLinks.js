import React from 'react';
import styled from 'styled-components';

const NavRightLinks = styled.ul`
  grid-column: 2;
  grid-row: 2;
  text-align: right;
  /* border: 1px solid yellow; */
`
const RightLinks = () => (
    <NavRightLinks className="header-right-links">
        <li>
            <a href="#">OUR PARTNERSHIP</a>
        </li>
        <li>
            <a href="#">OUR PROFILE</a>
        </li>
    </NavRightLinks>
)
export default RightLinks;