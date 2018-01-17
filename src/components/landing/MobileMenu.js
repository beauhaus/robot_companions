import React from 'react';
import styled from 'styled-components';

import MobileLinks from './MobileLinks';

const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 105vh;
    width: 100vw;
    // overflow: hidden;
    text-align: center;
    background: rgb(54, 52, 52);
    color: wheat;
    z-index: 50;
`
/**
 * 
 */
const MobileMenu = () => {
        return (
            <StyledMenu>
                <MobileLinks/>
            </StyledMenu>
        )
    }

export default MobileMenu;