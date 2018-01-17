import React from 'react';
import styled from 'styled-components';

import MobileMenu from './MobileMenu';

const StyledMobile = styled.header`
    position: fixed;
    height: 10vh;
    right: 0;
    width: 18vw;
    z-index: 50;
    top: 0;
@media screen and (min-width: 420px) {
    display: none;
}
`

const StyledHamburger = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    width: 80px;
    height: 9.7vh;
    font-size: calc(var(--base) * 2.2);
    padding: 0 3vw;
    background: transparent;
    color: #a71313;
    z-index: 51;
    border-width: 0;
`

const CloseBtn = styled.button`
    position: fixed;
    right: 0;
    top: 0;
    width: 80px;
    height: 9.7vh;
    font-size: calc(var(--base) * 2.2);
    padding: 0 3vw;
    background: rgb(54, 52, 52);
    color: #a71313;
    z-index: 52;
    border-width: 0;
`
class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.hamburgerHandler = this.hamburgerHandler.bind(this);
        this.state = {
            visible: false
        }
    }
    hamburgerHandler() {
        this.setState((prevState) =>({
            visible:  !prevState.visible
        }))
    }
    render() {
        return (
            <StyledMobile className="mobile-header" id="mobile-header">
                <StyledHamburger onClick={this.hamburgerHandler} className="hamburger">&#9776;</StyledHamburger>
                {this.state.visible && <MobileMenu />}
                {this.state.visible && <CloseBtn onClick={this.hamburgerHandler} >&times;</CloseBtn>}
            </StyledMobile>
        )
    }
}

export default Mobile;