import React from 'react';
import RightLinks from './RightLinks';

const Nav = () => (
    <nav>
        <div className="inner-nav-grid-container">
            <img id="header-left-icon" src="img/top-left-header-icon.svg" alt="brand-icon" />
            <RightLinks />
        </div>
    </nav>
)
export default Nav;