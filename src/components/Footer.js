import React from 'react';
/**Styled Component */
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #9eeed5;
    color: #181e32;
    height: 20.5vh;
`
const Footer = () => (
    <Wrapper>
        <footer>
            <h1>A Fine space for a footer</h1>
        </footer>
    </Wrapper>

)
export default Footer;