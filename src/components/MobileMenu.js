import React from 'react';
import styled from 'styled-components';

import HeaderLinks from './HeaderLinks';



const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding: 0 3vw;
    background: teal;
    opacity: 0.5;
    color: wheat;
`

const MobileMenu = () => {
        return (
            <StyledMenu>
                <HeaderLinks/>
            </StyledMenu>
        )
    }

export default MobileMenu;