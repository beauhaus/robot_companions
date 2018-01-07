import React from 'react';
import styled from 'styled-components';

import MobileLinks from './MobileLinks';

const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left:-1vw; /* FIXME: this is a hot-fix for an anomoly with centering. (<Partnership /> may be the culprit) */
    height: 105vh;
    width: 102vw;
    text-align: center;
    background: rgba(54, 52, 52, 0.8);    
    color: wheat;
`

const MobileMenu = () => {
        return (
            <StyledMenu>
                <MobileLinks/>
            </StyledMenu>
        )
    }

export default MobileMenu;