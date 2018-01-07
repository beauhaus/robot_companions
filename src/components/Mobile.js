import React from 'react';
import styled from 'styled-components';

import MobileMenu from './MobileMenu';



const StyledMobile = styled.header`
    position: fixed;
    right: 0;
    width: 18vw;
    z-index: 50;
    top: 0;

@media screen and (min-width: 376px) {
    display: none;
}
`

const StyledHamburger = styled.div`
    font-size: 2rem;
    padding: 0 3vw;
    background: teal;
    color: wheat;
    z-index: 51;
`
const CloseBtn = styled.button`
    position: fixed;
    right: 0;
    top: 0;
    width: 18vw;
    font-size: 2rem;
    padding: 0 3vw;
    background: teal;
    color: wheat;
    z-index: 52;
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
        console.log("HamHandled")
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